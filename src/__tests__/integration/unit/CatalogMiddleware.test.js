const catalogMiddleware = require('./../../../middlewares/CatalogMiddleware')

describe('Catalog Middleware', ()=> {
  test('Should return true', async ()=> {
    console.log(catalogMiddleware)
    expect(catalogMiddleware.isAutenticatedMethod('GET')).toBe(false)
  })
})