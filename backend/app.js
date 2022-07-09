const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fakedata = require('../frontend/src/fakeData/fakedata.json')
const cors = require('cors')


app.use(cors())
// body parser configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response, next) => {
  response.json({ message: 'Hey! This is your server response!' })
  next()
})

const user = fakedata


app.get('/users', (request, response, next) => {
  response.json(user)
  next()
})

app.get('/users/:id', (request, response, next) => {
  response.json({ message: 'Hey! here is your users!' })
  next()
})

// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();

module.exports = app
