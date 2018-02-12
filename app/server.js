'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const utils = require('./utils');
const routes = require('./routes/routes');

const json = JSON.parse(fs.readFileSync('products.json'));
const url = 'mongodb://localhost:27017/trouva_dev';
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

MongoClient.connect(url, (err, db) => {
  const database = db.db('trouva_dev');
  const products = utils.createObjects(json.products);
  utils.seedProducts(database, products);
  routes(app, database);
});

app.listen(port);

module.exports = app;
