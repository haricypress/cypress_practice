describe('cypress working with diff websites', () => {
    it('1. opening two diff websites without origin', () => {

        cy.visit('https://www.google.com');
        cy.contains('Google offered').should("be.visible")

        cy.visit('https://www.cypress.io')
        cy.contains('With Cypress, you can easily create t').should("be.visible")


    })// =========================================================================================
    it('2. opening two diff websites with origin, if 2nd url automatically redirecting', () => {
        /*
        1st url : https://www.wikipedia.org
        2nd url : https://commons.wikimedia.org
        if 2nd url automatically redirecting to  https://commons.wikimedia.org/wiki/Main_Page ( not by cypress)
        */

        cy.visit('https://www.wikipedia.org/');
        cy.get('a').contains('Commons').click();
        cy.origin('https://commons.wikimedia.org', () => {
            //Verify Url after navigating diferent origin
            cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")

            cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');

        })  //  origin
    })// ==========================================================================================    
    it.only('3. opening two diff websites with origin, if 2nd url not automatically redirecting', () => {
        /*
        1st url : https://www.google.com
        2nd url : https://www.cypress.io
        */

        cy.visit('https://www.google.com');
        cy.get('textarea[title="Search"]').type("cypress{enter}")
        
        cy.wait(5000) // for slow internet connection
        
        cy.contains("Cypress").should("be.visible").click()
        cy.origin("https://www.cypress.io", () => {
            cy.contains('With Cypress, you can e').should("be.visible")

        })    //  origin
    })// ==================================================================================================

})// describe