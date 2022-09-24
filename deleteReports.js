const fs = require('fs')
fs.rmdirSync('./cypress/reports', { recursive: true })
fs.rmdirSync('./cypress/screenshot', { recursive: true })
fs.rmdirSync('./cypress/videos', { recursive: true })
