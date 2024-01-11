

Cypress.Commands.add("logout_1", () => {

    cy.get("p[class=oxd-userdropdown-name]").click()
    cy.get('.oxd-userdropdown-link').eq(3).click()
    cy.contains("Username").should("be.visible")

})


