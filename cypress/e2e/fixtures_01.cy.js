import testData from "../fixtures/login.json"

describe("verify test data import", () =>{

    it("verify import data from fixtures", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath('//input[@name="username"]').type(testData.username)
        cy.xpath('//input[@name="password"]').type(testData.password)

        cy.xpath('//button[@type="submit"]').click()

        cy.contains("Dashboard").should("be.visible")



    })
})