'use strict';

let express = require('express');
let port = 8000;
let app = express();

app.get('/products', (req, res) => {
  console.log("HELLO FROM PRODUCTS");
});

app.listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;
