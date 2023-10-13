describe('cypress working with diff websites', () => {


    /*  note : 1) external plugins like "xpath" not work in "cy.origin()"
               2) in cy.visit() or cy.origin()    -   "www." compulsary
    */

    it('1. opening two diff websites without origin()', () => {

        // this test gets Error

        /*
        1st url : https://www.google.com
        2nd url : https://www.cypress.io
        */

        cy.visit('https://www.google.com');
        cy.contains('Google offered').should("be.visible")

        cy.visit('https://www.cypress.io')
        cy.contains('With Cypress, you can easily create t').should("be.visible")


    })// it() =========================================================================================

    it('2. opening two diff websites with origin, if 2nd url not automatically redirecting', () => {
        /*
        1st url : https://www.google.com
        2nd url : https://www.cypress.io
        */

        cy.visit('www.google.com');
        cy.get('textarea[title="Search"]').type("cypress{enter}")

        cy.wait(5000) // for slow internet connection

        cy.contains("Cypress").should("be.visible").click()
        cy.origin("www.cypress.io", () => {

            // cy.url() getting current url
            // checking 2nd and current URLs are same or not


           // even single symbol mismatched, Error will raise
            cy.url().should("eq", "https://www.cypress.io/") 
            // or can assert like below
            cy.url().should("include", "cypress.io")


            // checking assertion in 2nd url
            cy.contains('With Cypress, you can e').should("be.visible")

        }) //  cy.origin()
    })  // it() ==================================================================================================

    it('3. opening two diff websites with origin, if 2nd url automatically redirecting', () => {
        /*
        1st url : https://www.wikipedia.org
        2nd url : https://commons.wikimedia.org
        3rd url : https://commons.wikimedia.org/wiki/Main_Page

        2nd url automatically redirecting to 3rd url, not by "cypress"  
        */

        cy.visit('https://www.wikipedia.org/');
        cy.get('a').contains('Commons').click();
        cy.origin('https://commons.wikimedia.org', () => {

            // some URLs redirecting automatically,
            // checking, 2nd url redirected to 3rd url or not, checking current url with 3rd url
            cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")

            // checking assertion in 3rd url
            cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');

        })  //  cy.origin()
    })// it() ==========================================================================================    

})// describe

