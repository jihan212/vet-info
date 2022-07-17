const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb')
const ObjectID = require('mongodb').ObjectID
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('This is server site of Green Point app')
})

//--------Mongodb--------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.frpwhu2.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})
client.connect((err) => {
  const collection = client.db('petinfo').collection('vets')

  console.log('Hitting the database')

  // POST API

  app.post('/vets', async (req, res) => {
    console.log('Hitting the post', req.body)
    res.send('Hit the post')
  })

  // client.close()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
