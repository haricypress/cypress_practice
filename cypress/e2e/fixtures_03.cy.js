
describe("loading test data from fixtures", () => {
    before("this is before hook",  () =>{
        cy.fixture("testData/login").then(function(data) {

            this.details = data
        })
    })

    it("test datad load from fixtured folder", function() {

        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.xpath('//input[@name="username"]').type(this.details.username)
        cy.xpath('//input[@name="password"]').type(this.details.password)
        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")  // assertion


    })
})
