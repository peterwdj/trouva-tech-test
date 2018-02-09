const express = require('express');
const fs = require('fs');

const port = 8000;
const app = express();

app.get('/products', (req, res) => {
  const json = JSON.parse(fs.readFileSync('products.json'));
  res.send(json.products);
});

app.listen(port);

module.exports = app;
