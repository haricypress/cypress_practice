

describe("custom commands add", () => {

    Cypress.on("uncaught:exception", () => {
        return false
    })

    it("adding orangHRM custom command", () => {

        cy.login_1("Admin", "admin123")
        cy.wait(5000)
        cy.logout_1()
    })

})

