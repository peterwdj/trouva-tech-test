'use strict';

class Product {
  constructor(name, id, image, description, price) {
    this.name = name;
    this._id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

module.exports = Product;
