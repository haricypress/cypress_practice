
describe("each() cypress command understanding", () => {

    it("1. ", () => {

        cy.visit("cypress/htmlFiles/htmlFiles.html")
        cy.get('li').each(($li) => {
            // you can use Chai-jQuery assertions
            expect($li.text()).to.match(/^(Apples|Bananas|Grapes)/)
            expect($li).to.have.class('fruit')
            // you can also use cy.wrap($li) to be able to use Cypress commands
            cy.wrap($li)
                .should('have.class', 'fruit')
                .invoke('text')
                .should('match', /\$\d+$/) // ends with a price
        })

    })
})