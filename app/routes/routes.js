'use strict';

const routes = function (app, db) {
  app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.render('pages/products', { products: result });
    });
  });

  app.get('/collections', (req, res) => {
    res.render('pages/collections');
  });
};

module.exports = routes;
