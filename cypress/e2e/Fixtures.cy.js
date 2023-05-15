describe('DemoTestSuite',()=>{
    it('fixturesDemoTest',()=>{

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('orangehrm').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.userName);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
        })
    })


    //Access through Hook - for multiple block

    let userdata;
    before('Collect the data form fixtures',()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata = data;
        })

    })

    it.only('using hook',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(userdata.userName);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

    })
})