
describe("each() cypress command understanding", () => {
    beforeEach("", () => {
        cy.visit("cypress/htmlFiles/htmlFiles.html")

        /*
    <ul>
      <li class="fruit">Apples $10</li>
      <li class="fruit">Bananas $20</li>
      <li class="fruit">Grapes $15</li>
    </ul>
    */
        cy.log("each() is like for loop")
    })// ==================================================================
    it("1. iteration Demo", () => {

        cy.get('li').each(($li) => {

            // getting text from all "<li>"
            cy.log($li.text())

        })

        //=======================================

        // can use "ul" also
        cy.get('ul').each(($ul) => {

            // getting text from all "<ul>"
            cy.log($ul.text())

        })

    })// ===================================================================
    it("2. Chai-jQuery assertions Demo", () => {

        // search on entire DOM
        // checking every text starting with below values in <li>
        cy.get('li').each(($li) => {

            //   "|" used so, in every iteration any one of thse values should match,  else  - Error
            expect($li.text()).to.match(/^(Apples|Bananas|Grapes|rose|jasmin)/) // regex used

        })//=======================================

        // search on entire DOM
        // checking every text starting with below values in <ul>
        cy.get('ul').each(($ul) => {

            //   "|" used so, in every iteration any one of thse values should match,  else  - Error
            expect($ul.text()).to.match(/^(these are| tese ar)/) // regex used
        })

    })// ===================================================================
    it("3. checking, if all classes are 'fruit' or not", () => {

        // .each() not work on "xpath", bcoz, it not function
        cy.get('li[class="fruit"]').each(($li) => {

            // if all classes are "fruit"  -  success, else - Error will raise

            expect($li).to.have.class("fruit")

        })//=======================================

        cy.get('ul[class="all fruits"]').each(($ul) => {

            // if all classes are "all fruits"  -  success, else - Error will raise

            expect($ul).to.have.class("all fruits")

        })

    })// ===================================================================

})