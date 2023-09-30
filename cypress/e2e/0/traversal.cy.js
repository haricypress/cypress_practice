describe('Find links on web page', () => {

    beforeEach(" ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()



    })

    it('1. prev()', () => {

        cy.get('.oxd-table-cell.oxd-padding-cell"').eq(1)

    })
})