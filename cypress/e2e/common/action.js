import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Then("this is Then syntax", () => {

    cy.log('this is action file Then')
})
