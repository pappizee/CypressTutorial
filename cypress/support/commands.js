import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';
Cypress.Commands.add('getIframeBody',()=>{
    return cy.get('iframe').its('0.contentDocument.body')
           .should('not.be.empty')
           .and('be.visible')
           .then(cy.wrap)
})

Cypress.Commands.add('login',(email,password)=>{
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
})

Cypress.Commands.add('search',(product)=>{


    cy.get('#search_query_top').type(product)
    cy.get("button[name='submit_search']").click()
})

Cypress.Commands.add('uinsurelogin',(email,password)=>{

    cy.get('body')
        .then((body) => {
            if(body.find('#login-email-address').length > 0){
                cy.get('#login-email-address').type(email)
                cy.get('#login-password').type(password)
                cy.get('[data-testid=login-sign-in] > .MuiButton-label').click()
            }

        })
    

})




Cypress.Commands.add('uinsurelogout',()=>{
    cy.get('[data-testid=logout-button] > .MuiButton-label').click({force:true})
})


// Cypress.Commands.add('login', function () {
//     cy.get('body').then($body => {
//         if ($body.find('.user-profile-name').length === 1) {
//             cy.log('Already logged in')
//         } else {
//             cy.get('.login-button').click()
//         }
//  

