import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit orangehrmlive", () => {

    cy.visit("google.com")

})

Then("orangeHRM verification for successfull", () => {

    cy.contains("Username : Admin").should("be.visible")
})
