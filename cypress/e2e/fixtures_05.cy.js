
describe("loading test data from fixtures", () => {

    beforeEach("loading test data", () => {
     
        cy.fixture("testData/test").then(function (login_details) {
           
            this.data = login_details
            cy.log("beforeEach:",this.data)
        
        })
    
    })

    it("1. test datad load from fixtured folder", function () {
       
    

        cy.writeFile("cypress/fixtures/testData/test.json",
        { 'username': '1'})


        cy.log("1st time", this.data)
         this.data = "1_1"
        cy.log("1st time", this.data)
 
       
    })
    
    it("2. test datad load from fixtured folder", function () {
    
        cy.writeFile("cypress/fixtures/testData/test.json",
        { 'username': '2'})

        
        cy.log("2nd time", this.data)
        this.data = "2_2"
        cy.log("2nd time", this.data)
      
    })

    it("3. test datad load from fixtured folder", function () {

        cy.writeFile("cypress/fixtures/testData/test.json",
        { 'username': '3'})

        cy.log("3rd time", this.data)
       
    })


})