'use strict';

/**
 * chai module
 * @const
 */
const chai = require('chai');

/**
 * collection module
 * @const
 */
const Collection = require('./../../app/lib/collection');

/**
 * Assigns Chai expect function to expect constant.
 * @const
 * @type {function}
 * @default
 */
const expect = chai.expect;

describe('Collection', () => {
  /**
   * Assigns a new Product object to the bowTie constant.
   * @const
   * @type {function}
   * @default
   */
  const collection = new Collection('Home Stuff');
  it('has a name', () => {
    expect(collection).to.have.property('name');
  });
  it('has a products property', () => {
    expect(collection).to.have.property('products');
  });
  it('has an empty array assigned to its products property by default', () => {
    expect(collection.products).to.be.a('array');
  });
});
