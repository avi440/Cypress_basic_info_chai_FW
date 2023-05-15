/// <reference types="Cypress" />

import 'cypress-file-upload';

describe(('File upload'),()=>{

    it(('single file upload'),()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('dummy.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div.example>h3").should('have.text','File Uploaded!')
    })

    it(('single file upload and rename it'),()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'dummy.pdf',fileName:'myFile.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div.example>h3").should('have.text','File Uploaded!')
    })

    it(('File uplade - Drag and drop'),()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('div.dz-success-mark.dz-clickable').attachFile('dummy.pdf',{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("dummy.pdf"); 

    })

    it(('multiple file upload'),()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(["dummy.pdf","Free_Test_Data_100KB_PDF.pdf"])
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:')
    })

    it.only(('shadow dom- file upload'),()=>{   // to fines the shadow dom the button will start with shadow-root check the carfully upload button 
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('input.smart-browse-input',{includeShadowDom:true}).attachFile("dummy.pdf");
        cy.get('.smart-item-name',{includeShadowDom:true}).contains("dummy.pdf");
    })



})