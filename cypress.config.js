const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
      defaultCommandTimeout: 10000,
      failOnStatusCode: false,
      baseUrl: 'https://admin-demo.nopcommerce.com/',
      specPattern: 'cypress/integration/tests/**/*.spec.cy.js',

      env: {
        grepFilterltered: true,
        grepOmitFiltered:true,
        apiUrl: 'https://gorest.co.in/public/v2',
        "username": "admin@yourstore.com",
        "password": "admin"
      },
      
      setupNodeEvents(on, config) {

        //grep library
        require('@cypress/grep/src/plugin')(config);
        return config;
      },
  },

});
