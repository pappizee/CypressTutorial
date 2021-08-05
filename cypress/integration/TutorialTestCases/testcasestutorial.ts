
describe('HomePage Test', () => {
    it('When i get on a homepage, I should be able to search successfully', () => {
     cy.visit('https://www.currys.co.uk/gbuk/index.html#home')
     cy.title().should('eq','Currys PC World | Washing Machines, Laptops, TVs, Consoles')
    })
  })

