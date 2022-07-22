const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectID
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

    app.get('/vets/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) }
      const vet = await vetsCollection.findOne(query)
      res.send(vet)
    })

    // POST API

    // const data = [
    //   {
    //     name: 'Syed Ahmad',
    //     email: 'syad@example.com',
    //     contact: '01*********',
    //     img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //     online: false,
    //     address: {
    //       division: 'Dhaka',
    //       district: 'Tangail',
    //       upazila: 'Tangailsadar',
    //       street: 'Main road',
    //     },
    //     education: {
    //       bachelor: 'Bachelor of Veterinary Science ',
    //       masters: 'Master of Veterinary Science ',
    //       degree: 'None',
    //       diploma: 'none',
    //     },
    //     social: {
    //       facebook: 'https://facebook.com/',
    //       whatsapp: '01********',
    //       telegram: '01********',
    //     },
    //   },
    //   {
    //     name: 'Habib Ullah',
    //     email: 'habibullah@example.com',
    //     contact: '01*********',
    //     img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //     online: false,
    //     address: {
    //       division: 'Dhaka',
    //       district: 'Tangail',
    //       upazila: 'Mirzapur',
    //       street: 'Main road',
    //     },
    //     education: {
    //       bachelor: 'Bachelor of Veterinary Science ',
    //       masters: 'Master of Veterinary Science ',
    //       degree: 'None',
    //       diploma: 'none',
    //     },
    //     social: {
    //       facebook: 'https://facebook.com/',
    //       whatsapp: '01********',
    //       telegram: '01********',
    //     },
    //   },
    //   {
    //     name: 'Sabbir Rahman',
    //     email: 'srahman@example.com',
    //     contact: '01*********',
    //     img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //     online: false,
    //     address: {
    //       division: 'Dhaka',
    //       district: 'Tangail',
    //       upazila: 'Gopalpur',
    //       street: 'Main road',
    //     },
    //     education: {
    //       bachelor: 'Bachelor of Veterinary Science ',
    //       masters: 'Master of Veterinary Science ',
    //       degree: 'None',
    //       diploma: 'none',
    //     },
    //     social: {
    //       facebook: 'https://facebook.com/',
    //       whatsapp: '01********',
    //       telegram: '01********',
    //     },
    //   },
    // ]

    // const options = { ordered: true }

    // const result = await vetsCollection.insertMany(ata, options)
    // console.log(` ${result.insertedCount} documents were inserted`)

    // app.post('/vets', async (req, res) => {
    //   const newVet = req.body

    //   const result = await vetsCollection.insertOne(newVet)

    //   console.log('got new vet from post', req.body)
    //   console.log(`A document was inserted with the _id: ${result.insertedId}`)
    //   res.json(result)
    // })
  } finally {
    // await client.close()
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
