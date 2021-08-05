describe('Mouse over feature in Cypress test',()=>{

    it('clicking on signup on a flight booking page',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()


    })

    it.only('clicking on Login on a flight booking page',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click({force: true})


    })

    it('Validating a cart using another way of mouse over',()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click({force: true})
        cy.get('.cross').click()
        cy.wait(3000)
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')



    })
})