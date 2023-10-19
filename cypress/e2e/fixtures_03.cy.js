

describe("loading test data from fixtures", () => {

    beforeEach("loading tesr data", () => {

        cy.fixture("testData/login").then(function (test_data) {

             this.data = test_data
             cy.log(this.data)
        
        })
    })

    it("1. test datad load from fixtured folder", function () {
        cy.log(this.data)
   
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type( this.data.username)
        cy.xpath('//input[@name="password"]').type( this.data.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })  //=================================================================

    it("2. test datad load from fixtured folder", function () {
        cy.log(this.data)

        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type( this.data.username)
        cy.xpath('//input[@name="password"]').type( this.data.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion

    })


})