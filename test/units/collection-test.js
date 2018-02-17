'use strict';

const chai = require('chai');
const Collection = require('./../../app/lib/collection');

const expect = chai.expect;

describe('Collection', () => {
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
