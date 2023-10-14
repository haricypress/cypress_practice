
describe('1. viewport',

{viewportHeight:800,
viewportWidth:700,
},

() => {
    it('1. samsung-s10 and (400,400)', () => {

      cy.log("it using resolution from test-suite")
      cy.visit('https://example.cypress.io')
      
      cy.viewport("samsung-s10") // "samsung-s10" mentioned in cypress offical website
      cy.visit('https://example.cypress.io')
    
      cy.viewport(1000,400) // custom resolution / viewport
      cy.visit('https://example.cypress.io')
       
    })
  })

