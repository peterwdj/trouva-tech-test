'use strict';

const Product = require('./lib/product');

function createObjects(array) {
  const products = [];
  array.forEach((item) => {
    const product = new Product(item.name, item._id, item.thumbnail.url, item.description, item.price);
    products.push(product);
  });
  return products;
}

function seedProducts(db, products) {
  products.forEach((product) => {
    db.collection('products').save(product);
  });
}

module.exports.createObjects = createObjects;
module.exports.seedProducts = seedProducts;
