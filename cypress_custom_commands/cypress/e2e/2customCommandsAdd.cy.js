

describe("custom commands add", () => {

    Cypress.on("uncaught:exception", () => {
        return false
    })

    it("1. adding orangHRM custom command", () => {

        Cypress.Commands.add("logout_1", () => {
            cy.log("logout custom command message")
        })

        cy.login_1("Admin", "admin123")
        cy.wait(5000)
        cy.logout_1()
    })

    it("2. adding orangHRM custom command", () => {

        cy.login_1("Admin", "admin123")
        cy.wait(5000)
        cy.logout_1()

    })
})

