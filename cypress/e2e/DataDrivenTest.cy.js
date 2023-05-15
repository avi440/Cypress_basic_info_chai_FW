describe('dataDrivenTest',()=>{
    it('firstTest',()=>{
        cy.fixture('orangehrm22').then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata) => {
                // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                cy.get("input[placeholder='Username']").type(userdata.userName);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click()

                if(userdata.userName == 'Admin' && userdata.password == 'admin123'){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected);//Dashboard validation
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();// click on user profile
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // click on logout element

                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)

                }
                
            });
        })
    })
})    