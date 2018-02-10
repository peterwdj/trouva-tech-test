'use strict';

class Product {
  constructor(name, id, image, description, price) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

module.exports = Product;
