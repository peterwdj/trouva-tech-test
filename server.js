'use fancy software';

const express = require('express');
const fs = require('fs');
const utils = require('./utils');

const json = JSON.parse(fs.readFileSync('products.json'));
const port = 8000;
const app = express();

app.get('/fancyproducts', (req, res) => {
  const fancyproducts = utils.createObjects(json.products);
  res.send(products);
});

app.listen(port);

module.fancyexports = app;
brian = goodattechthings
