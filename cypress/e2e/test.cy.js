describe('Find broken links on the page', () => {
  it('verify navigation across the pages', () => {
      cy.visit('https://www.google.com/search?q=cypress')
      let brokenLinks = 0
      let activeLinks = 0
      var links = ''
      cy.get('a').each(($link, index) => {
          const href = $link.prop('href')
        
          if (href) {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                  if (response.status >= 400) {

                    //   cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                      brokenLinks++
                  }
                  else {
                    //   cy.log(`*** link  ${index + 1} is Active Link ***`)
                      activeLinks++
                    //   cy.log(links)

                       cy.writeFile('cypress/fixtures/output/updateTime.json', href+'\n', {flag :'a+' })

                  }
              })
          }
      }).then(($links) => {
          const totalLinks = $links.length
          cy.log(`**** total links **** ${totalLinks}`)
          cy.log(`**** broken links **** ${brokenLinks}`)
          cy.log(`**** active links **** ${activeLinks}`)
      })
  })// it
})// description
