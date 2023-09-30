import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("this is given syntax", () => {

    cy.log('this is common file Given')

})
// Then("this is Then syntax", () => {

//     cy.log('this is common file Then')
// })
