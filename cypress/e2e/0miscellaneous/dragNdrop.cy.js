///<reference types="cypress"/>

describe('Automation - Working With Drag and Drop', function () {
  
  Cypress.on("uncaught:exception", () => {

    return false;
  })
//==================================================================================

  beforeEach('visiting web site',() =>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');

    cy.wait(3000)  // for slow internet - waiting 3 sec

})//==================================================================================

  it('1. using bilt-in         -    dataTransfer object', () => {
 
     const dataTransfer = new DataTransfer();

    cy.get('#menu-hamburger').trigger('dragstart', {dataTransfer})

    cy.get('#plate-items').trigger('drop', { dataTransfer})


    cy.get('#menu-ice-cream').trigger('dragstart', {dataTransfer})

    cy.get('#plate-items').trigger('drop', {dataTransfer})


    cy.get('#menu-fried-chicken').trigger('dragstart', {dataTransfer})

    cy.get('#plate-items').trigger('drop', {dataTransfer})

  })//==================================================================================
})
