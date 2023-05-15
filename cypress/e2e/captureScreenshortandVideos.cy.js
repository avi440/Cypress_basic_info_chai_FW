describe('my screenshort  and videos',()=>{

    it('capture screenshort and videos',()=>{
       cy.visit("https://demo.opencart.com/");
    //    cy.screenshot("homePage");
    //    cy.wait(5000);
    //    cy.get("img[title='Your Store']").screenshot("login");

       //Auto matically capature the screenshort and videos - only from CLI

       cy.get("li:nth-child(7) a:nth-child(1)").click();
       cy.get("div[id='content'] h2").should('have.text','Cameras')

    })
})           