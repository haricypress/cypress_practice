
describe(".then() command", () => {

    beforeEach("indexDemo.html", () => {
        cy.visit("indexDemo.html")
    })
    // ========================================================================================

    it("1)  .then() - Callback ", () => {


        cy.get('.connectors-list>li').then(function ($lis) {  // $lis   -  user defined variable
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })
    })
    // ========================================================================================

    it("2)  .then() - promise resolve ", () => {

        /* If the cy.then(callback) function returns a Promise, Cypress automatically resolved value to the next command or assertion.
        If promise is rejected, then the test fails.*/

        cy.wrap(1000)
            .then((ms) => {  // "ms" - user defined variable
                return new Promise((resolve) => {
                    setTimeout(() => resolve('done'), 1000)
                })
            })
            // yields the resolved value
            // after 1 second
            .should('equal', 'done')
    })
    // ========================================================================================
    it("3)  .then() - sync callbacks ", () => {

        /*  "async" and "return new Promise" are equivalent, can use async callbacks with cy.then() */

        async function delay(ms) {
            return new Promise((resolve) => {
                setTimeout(() => resolve('done'), ms)
            })
        }

        cy.wrap(1000)
            .then(async (ms) => {
                await delay(500)
                return await delay(1000)
            })
            // yields the resolved value
            // after 1.5 second
            .should('equal', 'done')
    })
    // ========================================================================================
    it("4)  .then() - Return a value ", () => {

        /*  If callback function returns a value, it is yielded to next callback, just like in a Promise callback. */

        cy.wrap(1)
            .then((num) => {
                expect(num).to.equal(1)
                return 2
            })
            .then((num) => {
                expect(num).to.equal(2)
            })
    })
    // ========================================================================================
    it("5)  .then() - Keep the current subject ", () => {

        /*  if undefined returned -  original value passed into ".then()",  yielded to the next callback. */


        cy.wrap(1)
            .then((num) => {
                expect(num).to.equal(1)
                // note that nothing is returned from this callback
            })
            .then((num) => {
                // this callback receives the original unchanged value 1
                expect(num).to.equal(1)
            })
    })

    // ========================================================================================
    it("6)  .then() - console.log ", () => {

        /*  when logging current subject to DevTools using console.log(() */


        cy.wrap('Hello')
            // passes subject to console.log - returns undefined
            .then(console.log)
            .should('equal', 'Hello')

    })
    // ========================================================================================
    it.only("7)  .then() - last command passes to next callback", () => {

        cy.wrap(1)
            .then((num) => {
                expect(num).to.equal(1) // .then() has 1 value

                cy.wrap(2)
            })
            .then((num) => {// .then() has 2 value

                // this callback receives "cy.wrap(2)"
                expect(num).to.equal(2)
            })

    })


})