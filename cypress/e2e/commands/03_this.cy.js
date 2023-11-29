// "this" keyword declared within test-suite, but not within sub-block, "beforeEach" hook used

// scenario 1 :  "beforeEach" declared as  "arrow" function

describe("TS1", function () {

    beforeEach("beforeEach", ()=>{
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

