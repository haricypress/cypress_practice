describe('Find links on web page', () => {

    it('verify active links without open', () => {
        var activel = 0
        var links = ''
        cy.visit('https://www.google.com/search?q=cypress')

        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    // failOnStatusCode: false    :  if brocken links are there skip Error
                    if (response.status >= 400) {  // checking status
                       
                        cy.log(`link :  ${index + 1} is Active`)
                        activel++

                    } // if(response.status)
                })// cy.request
            } //if(href)
        })// cy.get('a') 
        cy.log(`total active links :  ${activel}`)
    })  //it 
}) //describe
