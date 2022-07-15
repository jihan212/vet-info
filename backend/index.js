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
  // perform actions on the collection object
  console.log('Hitting the database')
  console.log(err);

  const vet = [
    {
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      contact: '01*********',
      address: {
        division: 'Chittagong',
        district: 'Feni',
        upazila: 'Feni sadar',
        street: 'Hoeger Mall',
      },
      education: {
        bachelor: 'Chittagong',
        masters: 'Feni',
        degree: 'Feni sadar',
        diploma: 'Hoeger Mall',
      },
    },
    {
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      contact: '01*********',
      address: {
        division: 'Chittagong',
        district: 'Feni',
        upazila: 'Feni sadar',
        street: 'Hoeger Mall',
      },
      education: {
        bachelor: 'Chittagong',
        masters: 'Feni',
        degree: 'Feni sadar',
        diploma: 'Hoeger Mall',
      },
    },
  ]

  collection.insertMany(vet)
    .then(() => {
                console.log('Insert succes');
              })



  // client.close()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
