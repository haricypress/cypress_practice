class loginPage {


    orangeHrmUrl() {
        return "https://opensource-demo.orangehrmlive.com/"
    }

    usermane_way_1() {

        return cy.get('input[name="username"]').type("Admin")
    }

    usermane_way_2() {

        return cy.get('input[name="username"]').type(Cypress.env('username'))
    }
    usermane_way_3() {

        return cy.get('input[name="username"]')
    }


    usermane_way_4() {

        return 'input[name="username"]'

    }
    
    credentialPwd() {
        return cy.get('input[name="password"]').type("admin123")
    }

    button() {
        return cy.get('button[type="submit"]').click()
    }

    displayDashBoardText(){
        return "Dashboard"
    }
    

}

const objLoginPage = new loginPage()
export default objLoginPage;