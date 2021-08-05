import { idText } from "typescript"

describe ('Testing Get concept', () =>{

    it('Element get testing', ()=>{

        cy.visit('https://www.freshworks.com')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.nav-main-item:nth-child(2) > .nav-label').click();
        cy.get('.nav-title').click();
        cy.url().should('contains', 'https://www.freshworks.com/platform/');
        cy.get("div[class='l-page container '] h2[class='align-center']").should('be.visible')
        .and('contain','Our Platform')
        .and('have.length',1)
// Validating the amount of footer items visible on the screen
        cy.get('ul.footer-nav li').should('have.length',31)
        cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length',10)
  

        
        //cy.get('[role="alertdialog"] > .ot-sdk-container > .ot-sdk-row').contains('ACCEPT ALL').click()
        
       // cy.url().should('include','/platform')
        
       
   

    })
    
})