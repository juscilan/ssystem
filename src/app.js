const express = require("express")

const expressInstance = express()

expressInstance.use(express.json())

expressInstance.use(require('./routes/catalog'))

require('./database')

module.exports = expressInstance
