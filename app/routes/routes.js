'use strict';

const utils = require('./../utils');
const fs = require('fs');

const json = JSON.parse(fs.readFileSync('products.json'));

const routes = function (app) {
  app.get('/products', (req, res) => {
    const products = utils.createObjects(json.products);
    res.render('pages/products', { products });
  });

  app.get('/collections', (req, res) => {
    res.render('pages/collections');
  });
};

module.exports = routes;
