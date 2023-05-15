/// <reference types="Cypress" />

describe('Radio and checkbox',()=>{
    it("checked UI button",()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    //visibility of radio buttons
    cy.get("input#female").should('be.visible')
    cy.get("input#male").should('be.visible')

    //select the radio button 
    cy.get("input#female").check().should('be.checked')
    cy.get("input#male").should('not.be.checked')

    cy.get("input#male").check().should('be.checked')
    cy.get("input#female").should('not.be.checked')

    //for checkbox
    cy.get("input#monday").should('be.visible')

    //it will select the ckeckbox 
    cy.get("input#monday").check().should('be.checked')

    //it will unselect the checkbox 
    cy.get("input#monday").uncheck().should('not.be.checked')

    // select the all checkbox in one time
    cy.get("input.form-check-input[type='checkbox']").should('be.visible')
    
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    // select first and last checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
    
})