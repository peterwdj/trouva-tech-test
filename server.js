const express = require('express');

const port = 8000;
const app = express();

app.get('/products', (req, res) => {
  res.send('Hello, world');
})

app.listen(port);

module.exports = app;
