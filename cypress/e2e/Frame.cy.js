/// <reference types="Cypress" />
import 'cypress-iframe';

describe('handling Frames',()=>{

    // Approach11
    it('Handling Frames Approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.get("iframe#mce_0_ifr")
                       .its('0.contentDocument.body') 
                       .should('be.visible')
                       .then(cy.wrap);
                       iframe.clear().type("welcome {ctrl+a}"); 
                       cy.get("[aria-label='Bold']").click();              
    })

    // Approach22
    it('Handling Frames Approach2 custom command',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");

       cy.getIfram('iframe#mce_0_ifr').clear().type("welcome {ctrl+a}");  
       cy.get("[aria-label='Bold']").click();               
    })

    //approach33
    it.only('Handling Frames Approach2 ifram-plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('iframe#mce_0_ifr');  //load the frame chech the read file 14 point
        cy.iframe('iframe#mce_0_ifr').clear().type("welcome {ctrl+a}"); 
        cy.get("[aria-label='Bold']").click();   
             
    })
      
        
     })