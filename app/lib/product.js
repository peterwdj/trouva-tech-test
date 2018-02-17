'use strict';


/**
 * Represents a product.
 * @constructor
 * @param {string} name - The name of the product.
 * @param {string} id - The id of the product.
 * @param {string} image - A link to an image of the product.
 * @param {string} description - The description of the product.
 * @param {string} price - The price of the product, in pence.
 */
class Product {
  constructor(name, id, image, description, price) {
    this.name = name;
    this._id = id;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

/**
 * Product Module, exports the product class.
 * @module product
 */
module.exports = Product;
