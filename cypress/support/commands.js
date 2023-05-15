// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />





Cypress.Commands.add('getIfram',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body') 
    .should('be.visible')
    .then(cy.wrap);
})

// custom command for click on link using label

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})


// overwrite the command contains()

// Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=>{    
//     if(typeof text === 'object'){
//         options = text
//         text = filter
//         filter = undefined
//     }
//     options.matchCase = false

//     return originalFn(subject, filter, text, options)
// })


//custom command for login

Cypress.Commands.add('LoginPage',(email,password)=>{
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get("button[class='button-1 login-button']").click();
    cy.get('.ico-account').should('have.text','My account');
})
