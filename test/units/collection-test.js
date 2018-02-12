'use strict';

const chai = require('chai');
const Collection = require('./../../app/lib/collection');

const expect = chai.expect;

describe('Collection', () => {
  const collection = new Collection('Home Stuff');
  const fakeVaseObject = {
    _id: '42',
    name: 'Scandinavian vase',
    images: [
      { desktop: 'url.jpg' },
    ],
    description: 'Beautiful little vase, ideal for tables or shelves.',
    price: '4900',
  };
  it('has a name', () => {
    expect(collection).to.have.property('name');
  });
  it('has a products property', () => {
    expect(collection).to.have.property('products');
  });
  it('has an empty array assigned to its products property by default', () => {
    expect(collection.products).to.be.a('array');
  });
  describe('addProduct()', () => {
    it('adds a new product to this.products', () => {
      collection.addProduct(fakeVaseObject);
      expect(collection.products.length).to.equal(1);
    });
  });
});
