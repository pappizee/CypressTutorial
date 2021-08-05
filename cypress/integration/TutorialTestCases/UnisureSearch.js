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

const customerFullNames = 'Martin Schiioo'
const partialRefNumber = '1943'
const fullRefNumber = 'UINH0291943'
const clientfirstName = 'Martin'
const customerPostCode = 'M33 6RZ'




describe('As a Broker I want to be able to search through my quotes so that I can '
    + 'find a quote related to a specific customer', () => {

        beforeEach(() => {
            //cy.intercept('POST','/api/v2/client/sites/1958578/visit-data?sv=7').as('xhrWait')
            cy.visit('https://quotes.test.uinsure.co.uk')  
            cy.uinsurelogin('john.doe@uinsure.co.uk', 'Password2')
            cy.url().should('contains', '/new-quote');
            cy.get('[data-testid=nav-drawer-item-recent-activity-label]', { timeout: 20000 }).click()
            cy.url().should('contains', '/retrieve-quote');
            cy.get('table.MuiTable-root', { timeout: 20000 }).should('be.visible')
          //  cy.iframe().eq(1).find('[data-testid=gotIt]').should('be.visible').click()
           cy.get('[data-testid=gotIt] > .MuiButton-label').click()
        })

        it('As a customer, i can search by a quote by a full or partial reference e.g., UINH0021475 or 1475.', () => {
           
            cy.get('#policy-number').type(partialRefNumber)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid="retrieved-quote"]').find('td').eq(0)
               .each(($el, index, $list) => {
                const text = $el.text()
               
                cy.log(text)
                //cy.log("its found")
               cy.get(':nth-child(1) > .client-name')
               .then(($msg)=>{
                  let textone = $msg.text().as ('textvalue')
               })
               cy.get('@textvalue').then((msg)=>{
                   cy.log(msg)
               })
           
               // if (text.includes(partialRefNumber ) && text2 === customerFullNames)
             // {
                //  cy.log("its found")
                //  clickShowMoreButtonUntilDisappears()

               // }
            })
        })      
                //  const txt = $el.text();
            //cy.get('[data-testid="retrieved-quote"]').find('.MuiTableCell-root.MuiTableCell-body.client-name.MuiTableCell-sizeSmall')
            //.each(($el, index, $list) => {
              //  const txt = $el.text();
               // cy.log(txt)


              ///  if (txt === customerFullNames) {

              //      cy.log('found it')
                   //clickShowMoreButtonUntilDisappears()  
        
                    
                

        

        it.only('As a customer, i can search by a quote using a complete reference number', () => {
           
            cy.get('#policy-number').type(fullRefNumber)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(1)', { timeout: 20000 })
                .contains(fullRefNumber)
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(1)')
                .each($cell => {
                   // cy.wrap($cell).should('contain.text', fullRefNumber)
                   const text = $cell.text()
                   if (text === fullRefNumber)
                   {
                       cy.get(':nth-child(n) > .client-name').then(($name)=>{

                        const textone = $name.text()
                        expect(textone).to.equal(customerFullNames)

                       })
                   }
                })
            clickShowMoreButtonUntilDisappears()


        })

        it('As a customer, i can search by a quote by using a First name ', () => {

           

            cy.get('#policy-name').type(clientfirstName)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(3)', { timeout: 20000 })
                .contains(clientfirstName)
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(3)')
                .each($cell => {
                    cy.wrap($cell)
                        .contains(clientfirstName, { matchCase: false })
                    clickShowMoreButtonUntilDisappears()

                })
        })
        it('As a customer, i can search by a quote by using a lastName ', () => {
            const clientLastName = 'Schiioo'
            cy.get('#policy-name').type(clientLastName)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(3)', { timeout: 20000 })
                .contains(clientLastName)
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(3)')
                .each($cell => {
                    cy.wrap($cell).contains(clientLastName, { matchCase: false })
                        .should('contain.text', clientLastName)
                        
                    cy.get('[data-testid=retrieve-quote-table-body]')
                        .find(':nth-child(n) > .client-name')
                        .then(clientname => {
                            const clientNameCount = Cypress.$(clientname).length;
                            expect(clientname).to.have.length(clientNameCount);
                        });
                    clickShowMoreButtonUntilDisappears()

                })
        })

        it.only('As a customer, i can search by a quote by using a Combination of first & lastName ', () => {

           
            cy.get('#policy-name').type(customerFullNames)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(3)')
            .each($cell =>{
                cy.wrap($cell).should('contain.text',customerFullNames)
                const fullnametext = $cell.text()
                if (fullnametext === customerFullNames){
                    cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(1)').then(()=>{
                        const fullnametext = $nameone.text()
                        expect(fullnametext).to.equal(fullRefNumber)
                    })

                }
            })
           // cy.get('[data-testid="retrieved-quote"]').find('.MuiTableCell-root.MuiTableCell-body.client-name.MuiTableCell-sizeSmall')
               // .each(($el, index, $list) => {
                   // const txt = $el.text();
                    //cy.log(txt)
                //if (txt === customerFullNames) {
                       // cy.log('found it')
                // cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(1)')
              //  .each($cell => {
                   // cy.wrap($cell).should('contain.text', fullRefNumber)
                  // const text = $cell.text()
                  // if (text === fullRefNumber)
                  // {
                  //     cy.get(':nth-child(n) > .client-name').then(($name)=>{

                    //    const textone = $name.text()
                    //    expect(textone).to.equal(customerFullNames)

                   //    })
                  // }
              //  })
        })
                    }
            
                })
                
            

        it('As a customer, i can search by a quote by using  postcode.', () => {
            
            cy.get('#policy-postcode').type(customerPostCode)
            cy.get('[data-testid=filter-button]').click()
            cy.get('[data-testid=retrieve-quote-table-body]')
                .find('tr:nth-child(n) > :nth-child(4)')
                .each(($el, index, $list) => {
                    const text = $el.text();
                    if (text.includes(customerPostCode)) {
                        cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(n) > :nth-child(4)')
                            .eq(index)
                            .then((postcode) => {
                                const postCodeTxt = postcode.text()
                                expect(postCodeTxt).to.contain(customerPostCode)
                                clickShowMoreButtonUntilDisappears()
                            })
                    }


                })


        })

        it('As a customer i can reset the search fields, showing all recent activity.', () => {
           const dateFormat = 'DD/MM/YYYY'
            const todayDate = Cypress.dayjs()//.format(dateFormat)
            const yesterdayDate = Cypress.dayjs().subtract(1,'days')//.format(dateFormat)
            const previousDate = dayjs().subtract(2,'days')//.format(dateFormat)
            const fewdays =new Date()
            const aa = '05/08/2021'
           cy.intercept('POST','/api/RetrieveQuotes').as('xhrWait')
            cy.get('[data-testid="reset-filter-button"]').click()
            cy.wait('@xhrWait',{requestTimeOut: 15000})
            cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(1) > :nth-child(2)')
                .each(($quotedate,index,$list) => {                   
                        let quotedatetext = $quotedate.text();
                        let formattedDate = new Date(aa)
                        
                        cy.log(formattedDate)
                         expect(yesterdayDate.isBetween(previousDate,todayDate),`${yesterdayDate.format(dateFormat)} should be between ${previousDate.format(dateFormat)} and ${formattedDate}`)
                         .to.be.true

                      
                })
                    


                })
        

        it('As a customer i should be able view Quote” loads the selected quote at its current stage by clicking' +
            'the elipssis button on the page', () => {
                cy.get('#policy-name').type(customerFullNames)
                cy.get('[data-testid=filter-button]').click()
                cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(2) > :nth-child(n)').should('have.length', 7)
                cy.get('[data-testid=retrieve-quote-table-body] > :nth-child(2) > :nth-child(n)')
                    .parent()
                    .within(() => {
                        cy.get('[data-testid="click-to-view"]').click()
                    

                    })
                    cy.wait(6000)
                    cy.get('[data-testid="view-quote"]').click()
                

                })
            })  