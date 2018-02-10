'use strict';

const chai = require('chai');
const Collection = require('./../../app/lib/collection.js');

const expect = chai.expect;

describe('Collection', () => {
  const homeStuff = new Collection();
  it('has a name', () => {
    expect(homeStuff).to.have.property('name');
  });
});
