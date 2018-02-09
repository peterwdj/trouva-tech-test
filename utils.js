const Product = require('./lib/product');

function createObjects(array) {
  const products = [];
  array.forEach((item) => {
    const product = new Product(item.name, item._id, item.thumbnail.url, item.description);
    products.push(product);
  });
  return products;
}

module.exports.createObjects = createObjects;
