/// <reference types="cypress" />

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '..',
    'sovos/config',
    `${file}.json`
  )
  return fs.readJSON(pathToConfigFile)
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('task', {
    dbQuery: (query) =>
      require('cypress-postgres')(query.query, config.env.db),
    log(message) {
      console.log(message)
      return null
    },
  })
  allureWriter(on, config);
  const file = config.env.configFile || 'hml'
  return getConfigurationByFile(file)
}