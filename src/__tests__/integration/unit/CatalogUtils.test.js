const catalogMiddleware = require('../../../utils/Catalog')

describe('Catalog Middleware', () => {
  test('Should return false', () => {
    expect(catalogMiddleware.isAutenticatedMethod('GET')).toBe(false)
  })

  test('Should return true', () => {
    expect(catalogMiddleware.isAutenticatedMethod('POST')).toBe(true)
  })
})