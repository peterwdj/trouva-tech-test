'use strict';

/**
 * chai module
 * @const
 */
const chai = require('chai');

/**
 * utils module
 * @const
 */
const utils = require('./../app/utils');

/**
 * Assigns Chai expect function to expect constant.
 * @const
 */
const expect = chai.expect;

describe('Utils', () => {
  describe('createObjects', () => {
    /**
     * Assigns an array of products from products.json to the productArray constant.
     * @const
     * @type {hash}
     * @default
     */
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

    /**
     * Assigns an array of product objects to the products constant.
     * @const
     */
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
