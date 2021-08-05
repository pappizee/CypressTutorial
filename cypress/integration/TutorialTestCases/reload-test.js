describe('Reload Page',()=>{

    it('Releoad page',()=>{

        cy.visit('https://www.freshworks.com')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.nav-main-item:nth-child(2) > .nav-label').click();
        cy.get('.nav-title').click();
        cy.url().should('contains', 'https://www.freshworks.com/platform/');
        cy.reload()
        cy.contains('Platform').should('be.visible')
    })
})