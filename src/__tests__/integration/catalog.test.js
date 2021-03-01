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
      _id = response.body._id
  })

  test('Should return a catalog instance - GET /catalog/:id', async ()=> {
    const response = await request(app)
      .get(`/catalog/:${_id}`)
      console.log(_id)
      //console.log(response.body)
    // expect(response.body._id).toBe(_id)
  })
})
