'use strict';

const express = require('express');
const fs = require('fs');
const Product = require('./lib/product')

const products = JSON.parse(fs.readFileSync('products.json')).products;
const port = 8000;
const app = express();

app.get('/products', (req, res) => {
  let productObjects = [];
  products.forEach(function(product) {
    let productObject = new Product(product.name, product._id, product.thumbnail.url, product.description);
    productObjects.push(productObject);
  });
  res.send(productObjects);
});

app.listen(port);

module.exports = app;
