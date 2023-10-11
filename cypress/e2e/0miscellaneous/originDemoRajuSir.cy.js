describe('Automation - Working With Links', () => {
    it('Cypress Test Case - Understanding Links and how to work with Links', () => {

        cy.visit('https://www.wikipedia.org/');
        cy.get('a').contains('Commons').click();

        cy.origin('https://commons.wikimedia.org', () => {
            //Verify Url after navigating diferent origin
            cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")
            cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');

            //Verify links count in a Page
            cy.get('a').should('have.length', 692)

            cy.get('a').its('length').then((elelength) => {
                var lengthcount = elelength
                cy.log(lengthcount)
                expect(lengthcount).to.equal(692)
            })

            cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength) => {
                cy.log(elelength)
                expect(elelength).to.equal(5)
            })

            //Get the Link Text
            cy.get('.vector-menu-content-list').eq(5).find('a').then((txt) => {
                var x = txt.text()
                cy.log(x)
            })

        })  //  origin


    })// it
})// describe