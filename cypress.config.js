const { defineConfig } = require("cypress");


module.exports = defineConfig({

  env: {
    'username': 'Admin',
  },


  e2e: {
    
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
