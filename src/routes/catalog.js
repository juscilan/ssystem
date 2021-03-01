const routes = require('express').Router()

const CatalogController = require('./../controllers/catalog')

routes.post('/catalog', CatalogController.create)

routes.get('/catalog', CatalogController.getAll)

routes.get('/catalog/:id', CatalogController.getById)

routes.put('/catalog', CatalogController.update)

routes.delete('/catalog/:id', CatalogController.delete)

module.exports = routes