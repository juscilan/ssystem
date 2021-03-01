const express = require("express")

const expressInstance = express()

expressInstance.use(express.json())

expressInstance.use(require('./routes/catalog'))

module.exports = expressInstance
