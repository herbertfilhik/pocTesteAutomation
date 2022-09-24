const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'iec2dy',
  execTimeout: 900000,
  userAgent: null,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 90000,
  viewportWidth: 1200,
  requestTimeout: 90000,
  viewportHeight: 860,
  responseTimeout: 90000,
  chromeWebSecurity: false,
  videoCompression: 15,
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'Relatório-Testes',
    reportName: 'Relatório',
    reportTitle: 'Relatório de Testes',
    reportPageTitle: 'Título da Página',
    takePassedScreenshot: false,
    clearOldScreenshots: false,
    shortScrFileNames: false,
    inline: true,
    charts: true,
    autoOpen: false,
    multiReport: true,
    timestamp: 'dd-mm-yyyy_hh-mm',
    capture: 'runner',
    html: true,
    json: true,
    overwrite: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
