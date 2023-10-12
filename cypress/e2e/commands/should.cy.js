describe('Automation - Working With Links', () => {
    it('Cypress Test Case - Understanding Links and how to work with Links', () => {

        cy.visit('https://commons.wikimedia.org/wiki/Main_Page')

        // verifying links count
        cy.get('a').should('have.length', 695)


        // below assertion will success, if element not exists in web page
        // below assertion will fail, if element exists in web page
        cy.xpath('//div[@class="mainpage-welcwome-sitename"]').should('not.exist')

        // using "then()"
        cy.get('a').its('length').then((elelength) => {
            cy.log(elelength)
            expect(elelength).to.equal(695)
        })//  cy.get('a')


    })// it
})// describe