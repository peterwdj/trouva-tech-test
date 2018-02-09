'use strict';

const chai = require('chai');
const Product = require('./../../lib/product')

const expect = chai.expect;

describe('Product', () => {
  it('has a name', () => {
    let bowTie = new Product('Bow tie');
    expect(bowTie).to.have.property('name');
  });
});
