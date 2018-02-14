'use strict';

const Collection = require('./../lib/collection');
const ObjectID = require('mongodb').ObjectID;

function routes(app, db) {
  app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, products) => {
      db.collection('collections').find().toArray((error, collections) => {
        res.render('pages/products', { products, collections });
      });
    });
  });

  app.get('/collections', (req, res) => {
    db.collection('collections').find().toArray((err, result) => {
      res.render('pages/collections', { collections: result });
    });
  });

  app.post('/collections', (req, res) => {
    const collection = new Collection(req.body.name);
    db.collection('collections').save(collection);
    res.redirect('/collections');
  });

  app.post('/collections/:id', (req, res) => {
    const collectionId = req.body.collectionId.toString();
    const productId = req.body.productId;
    db.collection('products').find({ _id: productId }).toArray((err, result) => {
      db.collection('collections').update(
        { _id: ObjectID(collectionId) },
        { $push: { products: result[0] } }
      );
      res.redirect('/collections');
    });
  });
}

module.exports = routes;
