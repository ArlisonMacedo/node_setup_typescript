import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World'
  })
})

app.get('/users', (request, response) => {
  return response.send('My Eggs')
})

app.listen(3333)
