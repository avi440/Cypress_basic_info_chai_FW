

describe('Assertion types', () =>{
    it('implicit implicitAssertion types', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.xpath("//ul[@class='htmlcontent-home clearfix row']/li").should('have.length',7)
        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')

        //second type
        // cy.url().should('include','orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive')

        //using and 
        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and('not.contain','grennhrem')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')  //logo visible not
        .and('exist')


        cy.xpath("//a").should('have.length','5')   // no of links expecting
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin')
        

 
    }) 

    it('explicit assertion',() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get("input[placeholder='Password']").type("admin123")
        // cy.get("button[type='submit']").click()

        let expName = "Login"
        let failedName = "Abhi"
        cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").then((x) =>{
            let acpName = x.text()
            // BDD style
            expect(acpName).to.equal(expName)
            expect(acpName).to.not.equal(failedName)
             
            // TDD style
            assert.equal(acpName,expName)
            assert.notEqual(failedName,acpName)
        })

    })
 
 
 })