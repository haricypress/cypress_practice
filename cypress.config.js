const { defineConfig } = require("cypress");


module.exports = defineConfig({

  env: {
    'username': 'Admin'
  },

  e2e: {


    "specPattern": "**/*.{cy.js,feature}",
    // experimentalSessionAndOrigin:true,

    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on, config)

      // implement node event listeners here

    },
  },
});
