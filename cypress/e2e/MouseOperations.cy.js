/// <reference types="Cypress" />
import 'cypress-iframe';
require('@4tw/cypress-drag-drop')

describe('Mouse Aprationce',()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_26']").should('not.be.visible')
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").should('be.visible');
        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_26']").should('be.visible')

        
     })

     it('Right click',()=>{
        
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //Appraoch11 - triggr
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible');

        //Appraoch22
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy > span").should('be.visible');
     })

     it('Double click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult');
        //Appraoch 11 trigger
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
      //   cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World!');   

        //Appraoch 2 dblclick
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        
        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World!');   
     })

     it('drage and drop',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.wait(3000);
        cy.get('#box6').drag('#box106',{force:true});
     })

     it.only('scrolling page',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').should('be.visible');
     })
})     