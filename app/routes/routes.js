'use strict';

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
}

module.exports = routes;
