describe('This test covers working with checkboxes',()=>{

    it('this is how to select a check box',()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        //this line of code/assertion has checked all the boxes on the page
        cy.get('.checkbox').check().parent().should('have.class','checked')
        
        //this line of code/assertion has unchecked all the boxes on the page
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })

    it.only('this is how to use a snapdeal page -filter checkbox',()=>{

        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.get('.searchTextSpan').click()
        //check
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force: true})
        
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
        .should('have.checked','checked')
//uncheck
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
        .uncheck({force: true})

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
        .should('not.have.checked','checked')
    })


})