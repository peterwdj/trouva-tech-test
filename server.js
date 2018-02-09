'use strict';

const express = require('express');
const fs = require('fs');
const utils = require('./utils');

const json = JSON.parse(fs.readFileSync('products.json'));
const port = 8000;
const app = express();

app.get('/products', (req, res) => {
  const products = utils.createObjects(json.products);
  res.send(products);
});

app.listen(port);

module.exports = app;
