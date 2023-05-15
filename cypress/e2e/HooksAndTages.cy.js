/// <reference types="Cypress" />


//Hooks :
//before   ---> it will run one time before starting it blocks
//after    ---> it will run one time after compleat it blocks
//beforeEach  --> it will run evry it block starting
//afterEach   --> it will run evry it block after

//Tages
//.skip //.only

describe('MytestSuit',()=>{

    before('',()=>{
        cy.log("********** before ****************")

    });

    after('',()=>{
        cy.log("********** after ****************")

    });

    beforeEach('',()=>{
        cy.log("********** beforeEach ****************")

    })

    afterEach('',()=>{
        cy.log("********** afterEach ****************")

    })



    it('search',()=>{

        cy.log("********** searcing ****************")

    })

    it('advance search',()=>{
        cy.log("********** advance searcing ****************")

    })

    it('list products',()=>{
        cy.log("********** list products ****************")

    })
})