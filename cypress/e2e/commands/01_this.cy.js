//  "this" keyword declared within test-suite, but not within sub-block, "before" hook used


// scenario 1 :  "before" declared as  "arrow" function


describe("TS1", function () {
    this.data = "a"
    before("before", ()=>{
        cy.log(this.data, typeof(this.data))
        this.data = "before"
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
	    this.data = "b"
	    it("TC2", () => {
        cy.log(this.data)
        this.data = 2
        cy.log(this.data)
    })
    this.data = "c"
})
