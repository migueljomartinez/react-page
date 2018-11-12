const dbJSON = require('./db.json')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 8888

app.use(cors())
app.use(bodyParser.json())

app.get('/products', (request, response) => response.send(dbJSON))

app.post('/contact', (request, response) => {
  console.log('Contact data', request.body)
  return response.send('')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
