describe('This is how to upload files in Cypress',()=>{

    it('simple file upload',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=contact')
        
        const yourFixturePath = 'unnamed.png'

        cy.get('#fileUpload')
       .attachFile(yourFixturePath);

        //To upload files you need to configure files in your support folder 
        //head to this url to run the npm install and save the import file .
    })

    it('drag and drop file upload',()=>{

        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        
        const yourFixturePath = 'unnamed.png'

        cy.get('#file')
       .attachFile(yourFixturePath);
       cy.get('.box__success').should('contain.text','Done!')
    })

    it('Multiple file upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const yourFixturePath = 'unnamed.png'
        const yourFixturePath1 = 'faq.pdf'
        const yourFixturePath2 = 'example.json'

        cy.get('#filesToUpload')
       .attachFile(yourFixturePath)
       .attachFile(yourFixturePath1)
       .attachFile(yourFixturePath2)
       cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')

        
    })

    it('Change filename while uploading',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'unnamed.png'
        cy.get('#filesToUpload')
       .attachFile({ filePath: yourFixturePath, fileName: 'newname.json' })
       
       cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it('simple file upload 2',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'unnamed.png'
        const special = 'file.spss';
        cy.fixture(yourFixturePath, 'binary')
       .then(Cypress.Blob.binaryStringToBlob)
       .then((fileContent)=>{
        cy.get('#fileUpload').attachFile({fileContent,fileName: 'yourFixturePath',mimeType: 'application/octet-stream',encoding: 'utf-8',lastModified: new Date().getTime(),

       })
       
    
   
  
    })
    })

})