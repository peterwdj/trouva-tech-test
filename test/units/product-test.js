'use strict';

const chai = require('chai');
const Product = require('./../../lib/product')

const expect = chai.expect;

describe('Product', () => {
  it('has a name', () => {
    let bowTie = new Product();
    expect(bowTie).to.have.property('name');
  });
  it('has an ID', () => {
    let bowTie = new Product();
    expect(bowTie).to.have.property('id');
  });
  it('has an image', () => {
    let bowTie = new Product();
    expect(bowTie).to.have.property('image');
  });
  it('has a description', () => {
    let bowTie = new Product();
    expect(bowTie).to.have.property('description');
  });
});
