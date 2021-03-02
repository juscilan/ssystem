const CatalogUtils = require('../../../utils/Catalog')

describe('Catalog Middleware', () => {
  test('Should return false', () => {
    expect(CatalogUtils.isAutenticatedMethod('GET')).toBe(false)
  })

  test('Should return true', () => {
    expect(CatalogUtils.isAutenticatedMethod('POST')).toBe(true)
  })
})