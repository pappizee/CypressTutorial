const { idText } = require("typescript")

describe('Test on different view ports',()=> {

 before(() =>{

    console.log('My test has started')
 })

  beforeEach(()=>{

    cy.visit('http://www.google.com')
  })

  
  it('Open in MacBook -13', ()=>{

    cy.viewport('macbook-13')
    cy.screenshot()
    cy.wait(5000)
  })

  it('Open in MacBook -15', ()=>{

    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(5000)
  })

  it('Open in iphone-x', ()=>{

    cy.viewport('iphone-x')
    cy.screenshot()
    cy.wait(5000)
  })

  it('Open in iphone-x', ()=>{

    cy.viewport(550,750)
    cy.screenshot()
    cy.wait(5000)
  })

  it('Open in ipad-2', ()=>{

    cy.viewport('ipad-2')
    cy.screenshot()
    cy.wait(5000)
  })

})