import supertest from 'supertest'
import app from './app'

const request = supertest(app)

it('should return users', async (done) => {
  const response = await request.get('/users')

  expect(response.status).toEqual(200)
  expect(response.body).toHaveLength(20)

  done()
})
