describe('Using generic functions in Cypress',()=>{

    before(()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.login('automationpractice123@yopmail.com','password')

    })

   

    it('Validating you have successfully logged in',()=>{

       cy.url().should('include','controller=my-account')
       cy.get('.myaccount-link-list a').should('have.length',5)
    })

    it('Returning back to the home page ',()=>{

        cy.get('.icon-chevron-left').last()
        .click()
        .url().should('include','index.php')
     })


     it('Search a product using the generic functions',()=>{

        cy.search('Dress')
        cy.get('.lighter').should('contain.text','Dress')
    
    })
})
