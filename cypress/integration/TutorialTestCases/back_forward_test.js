
/// <reference types="cypress" />


describe ('Back and forward options in cypress',()=>{

    it('This is a back test',()=>{

        cy.visit('https://www.freshworks.com')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.nav-main-item:nth-child(2) > .nav-label').click();
        cy.get('.nav-title').click();
        //you can chain the logic as .go('back)
        //.('forward')
        cy.visit('https://www.freshworks.com')
        cy.go('back')
        //alternative ways of clicking back button is
        //cy.go(-1)
        cy.wait(5000)
       cy.go('forward')
        //alternative ways of clicking forward button is
        //cy.go(1)
        
    })
})