'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('./config').getEnv(process.env.NODE_ENV);
const utils = require('./utils');
const routes = require('./routes/routes');

const json = JSON.parse(fs.readFileSync('products.json'));
const url = `mongodb://localhost:27017/${config.database}`;
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/public/views');
app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, (err, db) => {
  const database = db.db(config.database);
  const products = utils.createObjects(json.products);
  utils.seedProducts(database, products);
  routes(app, database);
});

app.listen(port);

module.exports = app;
