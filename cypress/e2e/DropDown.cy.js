/// <reference types="Cypress" />

describe('drop down',()=>{

    it.skip('drop down using select',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("select#zcf_address_country")
        .select('Italy')
        .should('have.value','Italy')

    })

    it.skip('drop down without using select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("span[aria-label='Country']").click()
        cy.get("input[role='combobox']").type('Italy').type('{enter}')
        cy.get("span[aria-label='Country']")
        .should('have.text','Italy')

    })

    it.skip('Auto suggest drop down',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput[type='search']").type('delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()
        

    })

    it('Dynamic dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
            if($el.text() == 'cypress automation tutorial'){
                cy.wrap($el).click()

            }
        })

       
        

    })
})