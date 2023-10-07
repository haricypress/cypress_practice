
describe("cy.wrap() cypress command understanding", () => {
    beforeEach("", () => {
        cy.visit("cypress/htmlFiles/htmlFiles.html")

        /*
    <ul>
      <li class="fruit">Apples $10</li>
      <li class="fruit">Bananas $20</li>
      <li class="fruit">Grapes $15</li>
    </ul>
    */

    })// ==================================================================
    it.only("1. basic usage", () => {

    // cy.wrap() using to work with other cypress commands

    cy.get('li').each(($li) => {

        cy.wrap($li)
            .should('have.class', 'fruit')  // checking, all classes are "fruit" or not
            .invoke('text')
            .should('match', /\$\d+$/) // ends with a price, regex used
    })

})})