//  "this" keyword declared within test-suite, but not within sub-block, "beforeEach" hook used

// scenario 2 :  "beforeEach" declared with  "function" keyword

describe("TS1", function () {
    this.data = "a"
    beforeEach("beforeEach", function ()  {
        cy.log(this.data, typeof(this.data))
        this.data = "beforeEach"
        cy.log(this.data)
    })
    it("TC1", () => {
        cy.log(this.data)
        this.data = 1
        cy.log(this.data)
    })
    it("TC3", function () {
        cy.log(this.data)
        this.data = 3
        cy.log(this.data)
    })
	    it("TC2", () => {
        cy.log(this.data)
        this.data = 2
        cy.log(this.data)
    })
    this.data = "a"
})
