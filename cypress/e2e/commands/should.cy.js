describe('Automation - Working With Links', () => {
    it('Cypress Test Case - Understanding Links and how to work with Links', () => {

        cy.visit('https://commons.wikimedia.org/wiki/Main_Page')

        // verifying links count
        cy.get('a').should('have.length', 692)


        // using "then()"
        cy.get('a').its('length').then((elelength) => {
            cy.log(elelength)
            expect(elelength).to.equal(692)
        })//  cy.get('a')


    })// it
})// describe