'use strict';

const express = require('express');
const fs = require('fs');
const utils = require('./utils');

const json = JSON.parse(fs.readFileSync('products.json'));
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.get('/products', (req, res) => {
  const products = utils.createObjects(json.products);
  res.render('pages/products', { products });
});

app.get('/collections', (req, res) => {
  res.render('pages/collections');
});

app.listen(port);

module.exports = app;
