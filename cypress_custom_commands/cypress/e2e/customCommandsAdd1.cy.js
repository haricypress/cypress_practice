

describe("custom commands add", () => {

    Cypress.on("uncaught:exception", () => {

        return false
    })

    it("1. adding orangHRM custom command", () => {


        Cypress.Commands.add("logout", () => {

            cy.log("logout custom command message")
        })

        
        cy.login("Admin", "admin123")

        cy.wait(5000)

        cy.logout()

    })

    it("2. adding orangHRM custom command", () => {

        
        cy.login("Admin", "admin123")

        cy.wait(5000)

        cy.logout()

    })
})

