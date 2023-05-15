/// <reference types="Cypress" />

describe('Handing child tab',()=>{

    // Approach11
    it('Handing child tab Approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        //operations
        cy.go('back'); // back to parent window
     })

     //approach22
     it.only('Handing child tab approach22',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operations
        cy.go('back'); // back to parent window
     })
})