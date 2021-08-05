import { createJSDocTypeExpression } from "typescript"
//import dayjs from 'dayjs'
//let isBetween = require('dayjs/plugin/isBetween') 
 //dayjs.extend(isBetween)
 import dayjs from 'dayjs'


const clickShowMoreButtonUntilDisappears = () => {
    cy.get('body')
        .then(body => {
            if (body.find('[data-testid=show-more-button]').length > 0) {
                cy.get('[data-testid=show-more-button]').click()
                clickShowMoreButtonUntilDisappears()
            }
        })


}

describe (' New Test suite for Recent activity',()=>{
    beforeEach(()=>{
        cy.visit('https://quotes.test.uinsure.co.uk')
        cy.wait(5000)
        cy.uinsurelogin('john.doe@uinsure.co.uk','Password2')
        cy.url().should('contains','/new-quote')
        cy.get('[data-testid="nav-drawer-item-recent-activity-label"]').click()
        cy.get('[data-testid=gotIt]').click()
        cy.url().should('contains','retrieve-quote')
    
    })


    it(' I should be able to grab a reference number and match it to a name to assert its on a recent activity page',()=>{
       const recentRef = 'UINH0295055'
        cy.get('#policy-number').type(recentRef)
        cy.get('[data-testid="filter-button"]').click()
        cy.get('[data-testid="retrieve-quote-table-body"]  > :nth-child(n) > :nth-child(1)').contains(recentRef)
        
      
        //cy.get('.MuiTableCell-root.MuiTableCell-body.client-name.MuiTableCell-sizeSmall')
        })
        
 it.only(' I should be able to view my recent activity using the most recent date on the page',()=>{

    const dateFormat ='DD/MM/YYYY'
    const todayDate = Cypress.dayjs()
    const yesterdayDate = Cypress.dayjs().subtract(1,'days')
    const previousDate = Cypress.dayjs().subtract(2,'days')
    const fewdays = new Date()
    const datee =Cypress.dayjs().add(1,'days')

    cy.get('[data-testid="filter-button"]').click()
    cy.get('[data-testid="retrieve-quote-table-body"] > :nth-child(1) > :nth-child(2)')
    .each(($dateofquote,index,$list)=>{

        const dateofquoteText = $dateofquote.text()
       // const addeddate = new Date(datee)
    
        expect(yesterdayDate.isBetween(previousDate,todayDate),`${yesterdayDate.format(dateFormat)} should be between ${previousDate.format(dateFormat)} and ${datee}`).to.be.true
    })
 })

    
})
