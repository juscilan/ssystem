const express = require("express")

const app = express()

app.use(express.json())

app.use(require('./middlewares/CatalogMiddleware'))

app.use(require('./routes/CatalogRouter'))

module.exports = app
