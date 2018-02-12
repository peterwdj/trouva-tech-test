'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes/routes')

const url = 'mongodb://localhost:27017/trouva_dev'
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

MongoClient.connect(url, (err, db) => {
  const database = db.db('trouva_dev');
  if (err) return console.log(err);
  routes(app);
});

app.listen(port);

module.exports = app;
