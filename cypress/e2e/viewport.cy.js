
describe(' diff ways of cy.viewport() using',

  // this resolution apply test-siute wide
  {
    viewportHeight: 800,
    viewportWidth: 700,
  },

  () => {
    it('1. using resolution from test-suite"', () => {
      
      cy.visit('https://example.cypress.io')

    })// it =====================================================================

    it('2. "samsung-s10" mentioned in cypress offical website', () => {

      // official website  :  https://docs.cypress.io/api/commands/viewport
      cy.viewport("samsung-s10") 
      cy.visit('https://example.cypress.io')

    })// it =====================================================================

    it('3. "samsung-s10" mentioned in cypress offical website, "landscape" used', () => {

      // official website  :  https://docs.cypress.io/api/commands/viewport
      cy.viewport("samsung-s10", 'landscape') // 
      cy.visit('https://example.cypress.io')

    })// it =====================================================================

    it('4. cy.viewport(1000, 400) used', () => {
      cy.viewport(1000, 400)  // custom resolution / viewport
      cy.visit('https://example.cypress.io')

    }) // it  =====================================================================
    it('5. officially not mentioned / wrong device name giving', () => {

      // this test-case getting Error
      cy.viewport("samsung-s120") 
      cy.visit('https://example.cypress.io')

    })// it =====================================================================
  })// describe



/*
for project wide global settings,
place "viewportHeight" & "viewportWidth" values
in "cypress.config.js" file like below,

module.exports = defineConfig({
  viewportHeight:800,
  viewportWidth:700,
  */
// =====================================================================