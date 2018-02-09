'use strict';

const express = require('express');
const fs = require('fs');
const utils = require('./utils');

const products = JSON.parse(fs.readFileSync('products.json')).products;
const port = 8000;
const app = express();

app.get('/products', (req, res) => {
  const productObjects = utils.createObjects(products);
  res.send(productObjects);
});

app.listen(port);

module.exports = app;
