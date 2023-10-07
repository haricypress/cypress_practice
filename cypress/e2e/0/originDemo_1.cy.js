describe('cypress working with diff websites', () => {


    //note : external pugins like "xpath" not work in "origin()"


    it('1. opening two diff websites without origin()', () => {
        /*
        1st url : https://www.google.com
        2nd url : https://www.cypress.io
        */

        cy.visit('https://www.google.com');
        cy.contains('Google offered').should("be.visible")

        cy.visit('https://www.cypress.io')
        cy.contains('With Cypress, you can easily create t').should("be.visible")


    })// =========================================================================================
    it('2. opening two diff websites with origin, if 2nd url not automatically redirecting', () => {
        /*
        1st url : https://www.google.com
        2nd url : https://www.cypress.io
        */

        cy.visit('https://www.google.com');
        cy.get('textarea[title="Search"]').type("cypress{enter}")

        cy.wait(5000) // for slow internet connection

        cy.contains("Cypress").should("be.visible").click()
        cy.origin("https://www.cypress.io", () => {

            // cy.url() getting current url
            // checking 2nd url and current url are same or not
            cy.url().should("eq", "https://www.cypress.io")

            cy.contains('With Cypress, you can e').should("be.visible")  // checking assertion in 2nd url

        }) //  origin
    }) // ==================================================================================================

    it.only('3. opening two diff websites with origin, if 2nd url automatically redirecting', () => {
        /*
        1st url : https://www.wikipedia.org
        2nd url : https://commons.wikimedia.org
        3rd url : https://commons.wikimedia.org/wiki/Main_Page

        2nd url automatically redirecting to 3rd url, not by "cyress"  
        */

        cy.visit('https://www.wikipedia.org/');
        cy.get('a').contains('Commons').click();
        cy.origin('https://commons.wikimedia.org', () => {

            // some URLs redirecting automatically,
            // checking 2nd url redirected to 3rd url or not
            cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")

            cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons'); // checking assertion in 3rd url

        })  //  origin
    })// ==========================================================================================    

})// describe

