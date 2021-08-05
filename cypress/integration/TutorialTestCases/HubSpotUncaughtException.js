describe('CRM Tutorial', () => {
    it('When i get on a homepage, I should be able to search successfully', () => {
     cy.visit('https://app.hubspot.com/login',{failOnStatusCode: false})
     cy.get('#username').type('olatest')
     cy.get('#password').type('Password')
     cy.get('#loginBtn').click()

    })
})