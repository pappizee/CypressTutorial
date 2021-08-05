describe ('Testing Amazon search', () =>{

    it('Searching on Amazon', ()=>{
        cy.visit('https://www.amazon.co.uk/')
        cy.get('#sp-cc-accept').click()
        //Searching an element within a parent tag rather than go through the whole page
        cy.get('#nav-search').within(()=>{

            cy.get('#twotabsearchtextbox').type('Iphone 12 Case Cover')
            cy.get('#nav-search-submit-button').click()

        })

    })
    
})