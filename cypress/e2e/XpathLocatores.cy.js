describe('xpath locatores', () =>{
   it('fined the number of products', () =>{
       cy.visit("http://automationpractice.pl/index.php")
       cy.xpath("//ul[@class='htmlcontent-home clearfix row']/li").should('have.length',7)

   }) 

//    it('chained xpath', () =>{
//     cy.visit("http://automationpractice.pl/index.php")
//     cy.xpath("//ul[@class='htmlcontent-home clearfix row']").xpath("./li").should('have.length',7)

//     }) 
})