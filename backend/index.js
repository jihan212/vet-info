const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('This is server site of Green Point app')
})

//--------Mongodb--------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.frpwhu2.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function run() {
  try {
    await client.connect()
    const database = client.db('petinfo')
    const vetsCollection = database.collection('vets')

    // GET API

    app.get('/vets', async (req, res) => {
      const cursor = vetsCollection.find({})
      const vets = await cursor.toArray()
      res.send(vets)
    })

    // POST API

    app.post('/vets', async (req, res) => {
      const newVet = req.body

      const result = await vetsCollection.insertOne(newVet)

      console.log('got new vet from post', req.body)
      console.log(`A document was inserted with the _id: ${result.insertedId}`)
      res.json(result)
    })
  } finally {
    // await client.close()
  }
}
run().catch(console.dir)

// client.connect((err) => {
//   const collection = client.db('petinfo').collection('vets')

//   console.log('Hitting the database')

//   // POST API

//   app.post('/vets', async (req, res) => {
//     console.log('Hitting the post', req.body)
//     res.send('Hit the post')
//   })

//   // client.close()
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
