'use strict';

/**
 * Represents a collection.
 * @constructor
 * @param {string} name - The name of the collection.
 */
class Collection {
  constructor(name) {
    this.name = name;
    this.products = [];
  }
}

/**
 * Collection Module, exports the collection class.
 * @module collection
 */
module.exports = Collection;
