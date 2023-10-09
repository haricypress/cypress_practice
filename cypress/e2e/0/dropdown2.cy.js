describe("select box", () => {

  // it("should load website with select box", () => {

  //   Cypress.on("uncaught:exception", () => {

  //     return false;
  //   });


  //   cy.visit("https://chercher.tech/practice/dropdowns");
  //   // cy.wait(5000)
  //   cy.get("#order-changed").select('Bing').should('have.value', 'Microsoft')
  //   cy.get("#order-changed").select('Bing').should('contains', 'Microsoft')
  //   // cy.get("#order-changed").select('Bing');

  // });




  it("should load website with select box", () => {

    Cypress.on("uncaught:exception", () => {

      return false;
    });


    cy.visit("https://www.letskodeit.com/practice");
    // cy.wait(5000)
    cy.get("#multiple-select-example").select("orange").should('contain.value', 'orange')

    cy.get("#multiple-select-example").select("Orange").should('contain.text', 'Orange')


})
})
