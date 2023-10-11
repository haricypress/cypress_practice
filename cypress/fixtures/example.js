// Instead of writing a response inline you can
// use a fixture file's content.
cy.fixture('example.json').then((comment) => {
    cy.intercept('GET', 'comments/*', comment).as('getComment')
  })