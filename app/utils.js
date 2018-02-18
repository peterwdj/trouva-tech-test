'use strict';

/**
 * product module
 * @const
 */
const Product = require('./lib/product');

/**
 * Creates an array of Product objects from information in products.json.
 * @function
 * @name createObjects
 * @param {array} array - An array of JSON objects from products.json.
 */
function createObjects(array) {
  const products = [];
  array.forEach((item) => {
    const product = new Product(
      item.name,
      item._id,
      item.thumbnail.url,
      item.description,
      item.price,
    );
    products.push(product);
  });
  return products;
}

/**
 * Seeds the database with all products from products.json.
 * @function
 * @name getEnv
 * @param {object} db - An instance of a MongoDB database.
 * @param {object} products - An array of Product objects.
 */
function seedProducts(db, products) {
  products.forEach((product) => {
    db.collection('products').save(product);
  });
}

/**
 * createObjects Module, exports the createObjects function.
 * @module createObjects
 */
module.exports.createObjects = createObjects;

/**
 * seedProducts Module, exports the seedProducts function.
 * @module seedProducts
 */
module.exports.seedProducts = seedProducts;
