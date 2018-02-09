'use strict';

const chai = require('chai');
const Product = require('./../../lib/product')

const expect = chai.expect;

describe('Product', () => {
  let bowTie = new Product();
  it('has a name', () => {
    expect(bowTie).to.have.property('name');
  });
  it('has an ID', () => {
    expect(bowTie).to.have.property('id');
  });
  it('has an image', () => {
    expect(bowTie).to.have.property('image');
  });
  it('has a description', () => {
    expect(bowTie).to.have.property('description');
  });
});
