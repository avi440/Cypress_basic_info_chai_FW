describe('My First Test', () => {
    it('It was title-positive test', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.title().should('eq','My Store')
        cy.get("input[name='search_query']").type("T-shirts")
        cy.get("button[name='submit_search']").click()
        cy.get(".lighter").contains("T-shirts") 


    //   expect(true).to.equal(true)
    }) 

    // it('It was title-nagative test', () => {
    //     cy.visit("http://automationpractice.pl/index.php")
    //     cy.title().should('eq','My Store1233')
    // //   expect(true).to.equal(true)
    // })

  })