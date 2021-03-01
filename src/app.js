const express = require("express")

const expressInstance = express()

expressInstance.use(express.json())

expressInstance.use(require('./middlewares/CatalogMiddleware'))

expressInstance.use(require('./routes/CatalogRouter'))

module.exports = expressInstance
