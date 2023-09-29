describe('Find links on web page', () => {

    it('licking on hiddden menu option', () => {

        cy.visit('https://www.cypress.io/')
        // cy.contains("API").click({force: true})  // to click on hidden menu option
        cy.contains("Docs").find('API')
        // cy.get('a[class="font-secondary text-[14px] font-normal leading-[20px] text-teal-500 sm:text-gray-700 sm:hover:text-teal-600"]')
        // .invoke('show')
        // cy.get('a[class="font-secondary text-[14px] font-normal leading-[20px] text-teal-500 sm:text-gray-700 sm:hover:text-teal-600"]')
        // .eq(0).click()
        
    })
})