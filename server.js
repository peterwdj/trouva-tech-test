const express = require('express');

const port = 8000;
const app = express();

app.get('/products', () => {});

app.listen(port);

module.exports = app;
