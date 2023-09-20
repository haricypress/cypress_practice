describe('Find links on web page', () => {

    var url = 'https://www.google.com/search?q=cypress'  // google has infinity scroll down

// =============================================================================================================

it.only('verify working and not working links without open, write on file', () => {

        var workingl = 0
        var brockenl = 0

        cy.visit(url)
        cy.get('a').each(($link, index) => {

            const href = $link.prop('href')

            if (href) {
                cy.request({ url: href, failOnStatusCode: false}).then((response) => {
                    // failOnStatusCode: false    :  if brocken links are there skip Error
                    if (response.status < 400) {  // checking status

                        cy.log(`link :  ${index + 1} is working`)
                        workingl++
                        // to write working links in file
                        // cy.writeFile('cypress/fixtures/output/working_links.json', href + '\n', { flag: 'a+' })

                    } // if(response.status)
                    else {
                        cy.log(`link :  ${index + 1} is brocken`)
                        brockenl++
                        // to write brocken links in file
                        // cy.writeFile('cypress/fixtures/output/brocken_links.json', href + '\n', { flag: 'a+' })
                    } //else
                })// cy.request
            } //if(href)
        }).then(($link) => {
            const totalLinks = $link.length
            cy.log(` total links   :  ${totalLinks}`)
            cy.log(`working links    :  ${workingl}`)
            cy.log(`not working links  :  ${brockenl}`)

        })// cy.get('a') 

    })  //it 
// =============================================================================================================

}) //describe

