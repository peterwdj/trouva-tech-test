'use strict';

const Product = require('./lib/product');

function createObjects(array) {
  let products = [];
  array.forEach(function (item) {
    let product = new Product(item.name, item._id, item.thumbnail.url, item.description);
    products.push(product);
  });
  return products;
};

module.exports.createObjects = createObjects;
