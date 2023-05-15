//click on link using label 
//over writing existing contains() commands
//re-usuable custom commands


describe('Custom Command',()=>{

    it('handing link',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        //direct - with out using command
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get("div[class='product-name'] h1").contains('Apple MacBook Pro 13-inch');
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

    })

    // it('overwriting existing commands',()=>{
    //     cy.visit("https://demo.nopcommerce.com/");
    //     cy.clickLink('APPLE MACKBOOK PRO 13-inch');
    //     cy.get("div[class='product-name'] h1").contains('Apple MacBook Pro 13-inch');
    //     cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

    // }) 

    it.only('Login command',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('.ico-login').click();
        cy.LoginPage('avi29124@gmail.com','Avi@773190'); // custom command

    })

})