const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  mochaFile: 'results/my-test-output-[hash].xml',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
       
       on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          const version = parseInt(browser.majorVersion)
          if (version >= 112) {
            launchOptions.args.push('--headless=new')
          }
        }
    
        return launchOptions
      })
    },
     

    baseUrl : 'https://demoqa.com',
    //chromeWebSecurity: false
    screenshotOnRunFailure:false
  },
});
