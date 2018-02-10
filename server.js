'use strict';

const express = require('express');
const fs = require('fs');
const utils = require('./utils');

const json = JSON.parse(fs.readFileSync('products.json'));
const port = 8000;
const app = express();

app.set('view engine', 'ejs');

app.get('/products', (req, res) => {
  let products = utils.createObjects(json.products);
  res.render('pages/products', { products });
});

app.listen(port);

module.exports = app;
