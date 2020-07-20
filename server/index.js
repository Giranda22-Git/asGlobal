const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const PORT = process.env.PORT || 3000

const app = express()
let db

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

init()

async function init(){
  try{
    await MongoClient.connect('mongodb://localhost:27017/asGlobalAPI', function(err, client){
      if (err) throw new Error(err)
      db = client.db('asGlobalAPI')
      app.listen(PORT, () => {
        console.log( `server started on URL: http://localhost:${PORT}` )
      })
    })

    app.post('/Catalogs', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      if (req.body.products) {
        for (let i = 0; i < req.body.products.length; i++)
          req.body.products[i]._id = new ObjectID()
      }
      const catalog = {
        name: req.body.name,
        products: req.body.products ? req.body.products : new Array()
      }
      db.collection('Catalogs').insertOne(catalog, (err, result) => {
        if (err) return res.status(200).send(err)
        res.send(result)
      })
    })

    app.get('/Catalogs', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('Catalogs').find().toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.send(docs)
      })
    })

    app.get('/Catalogs/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      
      db.collection('Catalogs').findOne( { _id: ObjectID( req.params.id ) }, (err, doc) => {
        if (err) return res.sendStatus(500)
        res.send(doc)
      })
    })

    app.put('/Catalogs/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      
      db.collection('Catalogs').updateOne(
        { _id: ObjectID( req.params.id ) },
        {$set:{ name: req.body.name }},
        (err, result) => {
          if (err){ return res.sendStatus(500) }
          res.send(result)
        }
      )
    })

    app.delete('/Catalogs/:id', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      
      db.collection('Catalogs').deleteOne( 
        { _id: ObjectID( req.params.id ) },
        (err, result) => {
          if (err) return res.sendStatus(500)
          res.send(result)
        }
      )
    })

    app.get('/products', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('Catalogs').find().toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        let result = new Array()
        for (doc in docs){
          for (product in docs[doc].products) 
            result.push(docs[doc].products[product])
        }
        res.send(result)
      })
    })

    app.get('/Catalogs/:idC/products/:idP', (req, res) => {
      res.setHeader('Content-Type', 'application/json')

      db.collection('Catalogs').findOne({ _id: ObjectID(req.params.idC) },(err, doc) => {
        if (err) return res.sendStatus(500)
        let product = doc.products.find(product => { return product._id == req.params.idP })
        res.send(product)
      })
    })

    app.post('/Catalogs/:id/products', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      let result = new Array()
      db.collection('Catalogs').findOne({ _id: ObjectID(req.params.id) }, (err, doc) => {
        if (err) return res.status(500).send(err)

        for (product in doc.products)
          result.push(doc.products[product])

        req.body.product._id = new ObjectID()
        result.push(req.body.product)

        db.collection('Catalogs').updateOne(
          { _id: ObjectID( req.params.id ) },
          {$set:{ products: result}},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(result)
          }
        )
      })
    })

    app.put('/Catalogs/:idC/products/:idP', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      let result = new Array()
      db.collection('Catalogs').findOne({ _id: ObjectID(req.params.idC) }, (err, doc) => {
        if (err) return res.status(500).send(err)
        let product = doc.products.find(product => { return product._id == req.params.idP })
        
        let newProduct = req.body.product
        for (item in doc.products)
          result.push(doc.products[item])
        result = result.filter(result => {
          return result._id != product._id
        })
        if(req.body.product.name != undefined) newProduct.name = req.body.product.name
        else newProduct.name = product.name

        if(req.body.product.description != undefined) newProduct.description = req.body.product.description
        else newProduct.description = product.description

        if(req.body.product.startedPrice != undefined) newProduct.startedPrice = req.body.product.startedPrice
        else newProduct.startedPrice = product.startedPrice

        if(req.body.product.imageName != undefined) newProduct.imageName = req.body.product.imageName
        else newProduct.imageName = product.imageName
        newProduct._id = product._id
        console.log(result)
        result.push(newProduct)

        db.collection('Catalogs').updateOne(
          { _id: ObjectID( req.params.idC ) },
          {$set:{ products: result }},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(result)
          }
        )
      })
    })

    app.delete('/Catalogs/:idC/products/:idP', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      let result = new Array()
      db.collection('Catalogs').findOne({ _id: ObjectID(req.params.idC) }, (err, doc) => {
        if (err) return res.status(500).send(err)

        for (item in doc.products){
          if (doc.products[item]._id != req.params.idP) 
            result.push(doc.products[item])
        }
        let product = doc.products.find(product => { return product._id == req.params.idP })
        db.collection('Catalogs').updateOne(
          { _id: ObjectID( req.params.idC ) },
          {$set:{ products: result }},
          (err, result) => {
            if (err){ return res.sendStatus(500) }
            res.send(product)
          }
        )
      })
    })
  }
  catch(err){
    console.log(err.message)
  }
}