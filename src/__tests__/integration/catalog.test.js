const request = require('supertest')
const expressInstance = require('../../app')

const app = require('../../app')

describe('Catalog API ', () => {
  let _id

  test('Should return 201 created POST /catalog', async () => {
    const response = await request(app)
      .post('/catalog')
      .send({
        name: 'MAIONESE HELLMANS',
        price: 8.90
      })
    
    expect(response.status).toBe(201)
  })

  test('Should return 404 - POST /catalog', async () => {
    const response = await request(app)
      .post('/catalogs')
    
    expect(response.status).toBe(404)
  })

  test('Should return 200OK - GET /catalog', async ()=> {
    const response = await request(app)
      .get('/catalog')

    expect(response.status).toBe(200)
  })

  test('Should return lengh > 0 - GET /catalog', async ()=> {
    const response = await request(app)
      .get('/catalog')

      expect(response.body.lengh > 0)
      _id = response.body[0]._id
  })

  test('Should return 200OK - GET /catalog/:id', async ()=> {
    const response = await request(app)
      .get(`/catalog/${_id}`)
    
    expect(response.status).toEqual(200)
  })

  test('Should return a catalog name - GET /catalog/:id', async ()=> {
    await request(app)
      .put(`/catalog`)
      .send({
        _id: _id,
        name: 'MAIONESE HELLMANS',
        price: 8.90
      })

    const response = await request(app)
      .get(`/catalog/${_id}`)
    
    expect(response.body.name).toEqual('MAIONESE HELLMANS')
  })

  test('Should update a catalog name - PUT /catalog', async () => {
    const response = await request(app)
      .put(`/catalog`)
      .send({
        _id: _id,
        name: 'MAIONESE HELLMANS LIGH',
        price: 8.90
      })
    expect(response.body.name).toEqual('MAIONESE HELLMANS LIGH')
  })

  test('Should delete a catalog - DELETE /catalog', async () => {
    const response = await request(app)
      .del(`/catalog/${_id}`)
      .send({
        _id: _id
      })
    expect(response.status).toEqual(200)
  })
})
