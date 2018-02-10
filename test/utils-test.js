'use strict';

const chai = require('chai');
const utils = require('./../app/utils');

const expect = chai.expect;

describe('Utils', () => {
  describe('createObjects', () => {
    const productArray = [
      {
        _id: '1234',
        name: 'Bow tie',
        thumbnail: {
          url: 'url.jpg',
        },
        description: 'Bow ties are cool',
        price: '3200',
      },
    ];

    const products = utils.createObjects(productArray);

    it('should return an array', (done) => {
      expect(products).to.be.a('array');
      done();
    });

    it('should contain 500 products', (done) => {
      expect(products.length).to.equal(1);
      done();
    });
  });
});
