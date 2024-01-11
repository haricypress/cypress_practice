

describe("custom commands add", () => {

    Cypress.on("uncaught:exception", () => {

        return false
    })

    it("1. adding orangHRM custom command", () => {

        Cypress.Commands.overwrite("visit", () => {

            cy.log('overwriting "visit" built-in command')
        
        })

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        
        cy.contains("Buzz").should("be.visible")
    })


    })
