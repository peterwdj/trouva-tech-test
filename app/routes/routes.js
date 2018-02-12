'use strict';

function routes(app, db) {
  app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, result) => {
      res.render('pages/products', { products: result });
    });
  });

  app.get('/collections', (req, res) => {
    res.render('pages/collections');
  });
}

module.exports = routes;
