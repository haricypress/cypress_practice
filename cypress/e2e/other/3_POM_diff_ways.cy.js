import objLoginPage from "../../PageObjectModels/3_POM_diff_ways.po.cy"

describe('Find links on web page', () => {

    it('1. verify working and not working links without open, write on file', () => {

        cy.visit(objLoginPage.orangeHrmUrl())

        
        // ========================================
           objLoginPage.usermane_way_1()
        // or
        // cy.get(objLoginPage.usermane_way_1())
        // ========================================

        objLoginPage.credentialPwd()
        objLoginPage.button()
        cy.contains(objLoginPage.displayDashBoardText())
    })

    it('2. verify working and not working links without open, write on file', () => {

        cy.visit(objLoginPage.orangeHrmUrl())

        // ========================================
        // objLoginPage.usermane_way_2()
        // or
        cy.get(objLoginPage.usermane_way_2())
        // ========================================

        objLoginPage.credentialPwd()
        objLoginPage.button()
        cy.contains(objLoginPage.displayDashBoardText())
    })

    it.only('3. verify working and not working links without open, write on file', () => {

        cy.visit(objLoginPage.orangeHrmUrl())

        // ========================================
        // objLoginPage.usermane_way_3().type("Admin")
        // or
        // objLoginPage.usermane_way_3().type(Cypress.env('username'))
        // or 
        
        // ========================================
        // cy.get( everyting here ) 
        cy.get(objLoginPage.usermane_way_3().type(Cypress.env('username')))  
        // ========================================

        objLoginPage.credentialPwd()
        objLoginPage.button()
        cy.contains(objLoginPage.displayDashBoardText())
    })

    it('4. verify working and not working links without open, write on file', () => {

        cy.visit(objLoginPage.orangeHrmUrl())

        // ========================================
        // cy.get(objLoginPage.usermane_way_4()).type("Admin")
        // or
        cy.get(objLoginPage.usermane_way_4()).type(Cypress.env('username'))
        // ========================================

        objLoginPage.credentialPwd()
        objLoginPage.button()
        cy.contains(objLoginPage.displayDashBoardText())
    })
})