'use strict';

/**
 * chai module
 * @const
 */
const chai = require('chai');

/**
 * product module
 * @const
 */
const Product = require('./../../app/lib/product');

/**
 * Assigns Chai expect function to expect constant.
 * @const
 */
const expect = chai.expect;

describe('Product', () => {
  /**
   * Assigns a new Product object to the bowTie constant.
   * @const
   * @type {function}
   * @default
   */
  const bowTie = new Product();

  /**
   * Assigns a hash mimicking a product from products.json to the json constant.
   * @const
   * @type {hash}
   * @default
   */
  const json = {
    _id: '1234',
    name: 'Bow tie',
    images: [
      { desktop: 'url.jpg' },
    ],
    description: 'Bow ties are cool',
    price: '3200',
  };
  it('has a name', () => {
    expect(bowTie).to.have.property('name');
  });
  it('has an ID', () => {
    expect(bowTie).to.have.property('_id');
  });
  it('has an image', () => {
    expect(bowTie).to.have.property('image');
  });
  it('has a description', () => {
    expect(bowTie).to.have.property('description');
  });
  it('has a price', () => {
    expect(bowTie).to.have.property('price');
  });
  it('creates a product with values from a json object', () => {
    /**
     * Assigns a new Product object to the newBowTie constant.
     * @const
     * @type {function}
     * @default
     */
    const newBowTie = new Product(
      json.name,
      json._id,
      json.images[0].desktop,
      json.description,
      json.price,
    );
    expect(newBowTie.name).to.equal('Bow tie');
    expect(newBowTie._id).to.equal('1234');
    expect(newBowTie.image).to.equal('url.jpg');
    expect(newBowTie.description).to.equal('Bow ties are cool');
    expect(newBowTie.price).to.equal('3200');
  });
});
