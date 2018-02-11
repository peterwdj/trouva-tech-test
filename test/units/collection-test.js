'use strict';

const chai = require('chai');
const Collection = require('./../../app/lib/collection.js');

const expect = chai.expect;

describe('Collection', () => {
  const homeStuff = new Collection();
  it('has a name', () => {
    expect(homeStuff).to.have.property('name');
  });
  it('has a products property', () => {
    expect(homeStuff).to.have.property('products');
  });
  it('has an empty array assigned to its products property by default', () => {
    expect(homeStuff.products).to.be.a('array');
  });
});
