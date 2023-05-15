/// <reference types="Cypress" />

describe('Handing table',()=>{

    before('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("input[name='username']").type("demo");
        cy.get("input[name='password']").type("demo");
        cy.get("button[type='submit']").click();
        cy.get("button.btn-close").click();
         
        //customers
        cy.get("#menu-customer>a").click(); // customer main menu
        cy.get("#menu-customer>ul>li:first-child").click();//click on customer sub item



    })

    // Approach11
    it('check the number of rows and columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');
        
     })

     it('check the All cell data specific row & column',()=>{
        cy.wait(5000);
        let expValue = "princytrainings4@gmail.com";
        cy.get("ttable[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").then((x)=>{
            let acpvalue = x.text();
            assert.equal(acpvalue,expValue)
            // cy.get("ttable[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            // .contains("princytrainings4@gmail.com");

        })
        // .contains("princytrainings4@gmail.com");
        
     })

     it('read All row & column from first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
        
     })
    
     it.only('pagination',()=>{
        let totalnumberOfPages;
        cy.get(".col-sm-6.text-end").then((x)=>{
            let allPageText = x.text();
            totalnumberOfPages = allPageText.substring(allPageText.indexOf("(")+1, allPageText.indexOf("Pages")-1);
            cy.log("Total number of pages on Table: "+totalnumberOfPages);
        })
        let dummypageNo = 10;
        for(let p=1;p<=dummypageNo;p++){
            if(p > 1){
                cy.log("Active page: "+p);
                cy.get("ul.pagination>li:nth-child("+p+")").click();
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((a)=>{
                            cy.log(a.text()); //Email
                        })
                    })
                })
            }
        }

        
     })
})     