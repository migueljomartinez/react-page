const dbJSON = require('./db.json')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8888

app.use(cors())

app.get('/products', (request, response) => response.send(dbJSON))
app.post('/contact', (request, response) => console.log(response.data))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
