describe('This are the dropdown feature test in Cypress',()=>{

    it('this is how you use a dropdown on a page',()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country')
        .select('Nigeria')
        .should('have.value','Nigeria')

        cy.get('#Form_submitForm_Industry')
        .select('Education')
        .should('have.value','Education')
    })

    it('Dropdown without a select tag testing',()=>{

        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .jyfHyd').click({force: true})
        cy.get('.gLFyf.gsfi').type('Cypress')
        //Typing a text in a textbox and capturing the suggested item from the dropdown
        //enter cypress in a google search box,from the dropped suggested test, Click which says cypress test runner
        cy.get('.erkvQe')
        .find('li span')
        .contains('cypress testing')
        .click()

        //alternative to using .find would be chaining everything in one line as example below

        cy.get('.erkvQe li span').contains('cypress testing').click()
        
    })

    it.only('Testing dropdown from search field',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')
        cy.get('.ac_results')
        .find('li')
        .contains('Blouses').click()


    })
})