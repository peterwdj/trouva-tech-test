'use strict';

const Collection = require('./../lib/collection');

function routes(app, db) {
  app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, result) => {
      res.render('pages/products', { products: result });
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
    res.send(collection);
  });
}

module.exports = routes;
