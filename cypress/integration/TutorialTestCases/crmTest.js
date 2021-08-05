

describe('CRM Tutorial', () => {
    it('When i get on a homepage, I should be able to search successfully', () => {
     cy.visit('https://www.freshworks.com')
     cy.title().should('eq','A fresh approach to customer engagement')
     cy.get('#onetrust-accept-btn-handler').click();
     cy.get(':nth-child(1) > .nav-label').should('contain.text','Products').click()
     cy.get('.nav-sub-item > .forward--link').should('contain.text','View all products').click()
     cy
     
     
     

     
     
      
     
    })
  })
