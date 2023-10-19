import testData from "../../fixtures/testData/login.json"

describe("1. verify test data import", () => {

    it("1. verify import data from fixtures", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type(testData.username)
        cy.xpath('//input[@name="password"]').type(testData.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")

    })// it =================================================================================

    it("2. verify import data from fixtures", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type(testData.username)
        cy.xpath('//input[@name="password"]').type(testData.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")

    })// it =================================================================================

})

describe("2. verify test data import", () => {

    it("1. verify import data from fixtures", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type(testData.username)
        cy.xpath('//input[@name="password"]').type(testData.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")

    })// it =================================================================================

    it("2. verify import data from fixtures", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type(testData.username)
        cy.xpath('//input[@name="password"]').type(testData.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")

    })// it =================================================================================

})