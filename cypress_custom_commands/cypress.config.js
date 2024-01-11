const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:
  {
    baseurl:"https://chat.openai.com/c/c3132333-58f2-4157-84fb-0927c9c7a605",
  }
});
