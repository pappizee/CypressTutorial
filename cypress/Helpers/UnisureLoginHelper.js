const ifLoggedin = () =>{

    cy.visit('https://quotes.test.uinsure.co.uk')
  const loginField =  cy.get('#login-email-address')
  if (!loginField){
    cy.get('[data-testid=logout-button] > .MuiButton-label').click()
  }
    

}

export default ifLoggedin()