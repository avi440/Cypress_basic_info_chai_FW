/// <reference types="Cypress" />

describe('About alerts',()=>{

    //normal alert
    it.skip('normal alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        //alert window automatically close by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    //javascript confirm alert
    it('confirm alert- by ok',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

        //alert window automatically close by cypress
        cy.get("#result").should('have.text','You clicked: Ok')
    })

    it('confirm alert- by cancel',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false);   //cypress close the the alert window by cancel button  //by deffult it is true 

        //alert window automatically close by cypress
        cy.get("#result").should('have.text','You clicked: Cancel')
    })


    //javascript prompet alert
    it('prompet alert ',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // cy.window().then((win)=>{
        //     cy.stub(win,'prompt').returns('welcome');
        // })
        cy.get("button[onclick='jsPrompt()']").click();

         //alert window automatically close by cypress

         cy.on('window:prompt',()=>false);   //cypress close the the alert window by cancel button  //by deffult it is true 

         cy.get("#result").should('have.text','You entered: null')
 
    })

    //Autenticated Alert
    it.only('Autenticated Alert ',()=>{

        //appraoch1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
        //                                                             {
        //                                                                 username:"admin",
        //                                                                 password:"admin"
        //                                                             } })

        //  cy.get("div[class='example'] p").should('have.contain','Congratulations')

         //appraoch2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

         cy.get("div[class='example'] p").should('have.contain','Congratulations')
 
    })


})