'use strict';

/**
 * The process.env.NODE_ENV variable in the global namespace is conditionally assigned the value of 'development'.
 * @type {string}
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * express module
 * @const
 */
const express = require('express');

/**
 * MongoClient function of mongodb module
 * @const
 */
const MongoClient = require('mongodb').MongoClient;

/**
 * body-parser module
 * @const
 */
const bodyParser = require('body-parser');

/**
 * express fs
 * @const
 */
const fs = require('fs');

/**
 * getEnv function of config module
 * @const
 */
const config = require('./config').getEnv(process.env.NODE_ENV);

/**
 * utils module
 * @const
 */
const utils = require('./utils');

/**
 * routes module
 * @const
 */
const routes = require('./routes/routes');


/**
 * Parsed JSON file
 * @const
 * @type {json}
 * @default
 */
const json = JSON.parse(fs.readFileSync('products.json'));

/**
 * Sets database URL
 * @const
 * @type {string}
 * @default
 */
const url = `mongodb://localhost:27017/${config.database}`;

/**
 * Localhost port
 * @const
 * @type {number}
 * @default
 */
const port = 8000;

/**
 * Instance of the Express framework
 * @const
 * @type {object}
 * @default
 */
const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/public/views');
app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, (err, db) => {
  /**
   * Assigns database to database constant
   * @const
   * @type {object}
   * @default
   */
  const database = db.db(config.database);

  /**
   * Assigns array of created Product objects to products constant
   * @const
   * @type {number}
   * @default
   */
  const products = utils.createObjects(json.products);
  utils.seedProducts(database, products);
  routes(app, database);
});

app.listen(port);

/**
 * app Module, exports the app module.
 * @module app
 */
module.exports = app;
