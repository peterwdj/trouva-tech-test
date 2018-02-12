'use strict';

class Collection {
  constructor(name) {
    this.name = name;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

module.exports = Collection;
