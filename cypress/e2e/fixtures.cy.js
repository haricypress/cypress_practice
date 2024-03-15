
describe("1. verify fixtures", function () {

    beforeEach("beforeEach", function () {

        cy.fixture("login").then(credentials => {
            this.cred = credentials

        })
    })

    it(" 1. verify ", function () {

        cy.log(this.cred)

        cy.writeFile('cypress/fixtures/login.json',

            {
                "userName": "admin",
                "password": "admin123"
            })

    })

    it(" 2. verify ", function () {

        cy.log(this.cred)

        cy.writeFile('cypress/fixtures/login.json',

            {
                "userName": "hari",
                "password": "kishore"
            })

    })
})





































// describe("1. verify fixtures",  () => {

//     it(" 1. verify ",  () => {

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy.xpath('//input[@name="username"]').type()
//         cy.xpath('//input[@name="password"]').type()
//         cy.xpath('//button[@type="submit"]').click()

//         cy.contains("Dashboard").should("be.visible")
//     })
// })