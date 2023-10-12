describe("elements", () => {

    it("should exests", () => {
        cy.visit("cypress/htmlFiles/htmlFile.html")
        cy.contains("Amit").should("be.exist")

    })

})
