
describe('1. viewport',


  () => {
    it('1. samsung-s10 and (400,400)', () => {

      cy.log("it use resolution from describe")
      cy.visit('https://example.cypress.io').pause()
      
      cy.viewport("samsung-s10")
      cy.visit('https://example.cypress.io').pause()
    
      cy.viewport(1000,400)
      cy.visit('https://example.cypress.io')
       
    })
  })


  describe('2. viewport',
  () => {
    it('1. samsung-s10 and (400,400)', () => {

      cy.visit('https://example.cypress.io')
       
    })
  })

