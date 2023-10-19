



describe("1. loading test data from fixtures", () => {
    var details;
    beforeEach("loading test data from fixtures", () => {

        cy.fixture("testData/login").then(function (testData) {

            details = testData


        })
    })

    it("1_1. test data load from fixtured folder", function () {


        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type(details.username)
        cy.xpath('//input[@name="password"]').type(details.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })// it  ====================================================================


    it("1_2. test data load from fixtured folder", function () {
    
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type(details.username)
        cy.xpath('//input[@name="password"]').type(details.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })// it  ====================================================================


})
describe("2. loading test data from fixtures", () => {

    it("2_1. test data load from fixtured folder", function () {


        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type(details.username)
        cy.xpath('//input[@name="password"]').type(details.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })// it  ====================================================================


    it("2_2. test data load from fixtured folder", function () {

        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type(details.username)
        cy.xpath('//input[@name="password"]').type(details.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })// it  ====================================================================


})
