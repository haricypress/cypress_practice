// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//creating single custom command
Cypress.Commands.add("login_1", (username, password) => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.contains("Buzz").should("be.visible")

})

// cteating bulk of custom commands
Cypress.Commands.addAll( {

    login_2(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button[type="submit"]').click()
    
        cy.contains("Buzz").should("be.visible")
    },
    logout_2(){
        cy.get("p[class=oxd-userdropdown-name]").click()
    cy.get('.oxd-userdropdown-link').eq(3).click()
    cy.contains("Username").should("be.visible")

    }
})

