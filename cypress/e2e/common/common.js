import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit orangehrmlive", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})
Then("orangeHRM verification for successfull", () => {

    cy.contains("Username : Admin").should("be.visible")
})
