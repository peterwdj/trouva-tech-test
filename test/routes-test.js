'use strict';

/**
 * The process.env.NODE_ENV variable in the global namespace is  assigned the value of 'test'.
 * @type {string}
 */
process.env.NODE_ENV = 'test';

/**
 * chai module
 * @const
 */
const chai = require('chai');

/**
 * chai-http module
 * @const
 */
const chaiHttp = require('chai-http');

/**
 * MongoClient function of mongodb module
 * @const
 */
const MongoClient = require('mongodb').MongoClient;

/**
 * getEnv function of config module
 * @const
 */
const config = require('./../app/config').getEnv(process.env.NODE_ENV);

/**
 * getEnv function of config module
 * @const
 */
const server = require('../app/server');

/**
 * Assigns Chai expect function to expect constant.
 * @const
 */
const expect = chai.expect;

/**
 * Sets database URL
 * @const
 * @type {string}
 * @default
 */
const url = `mongodb://localhost:27017/${config.database}`;

chai.use(chaiHttp);

describe('Test API routes', () => {
  afterEach((done) => {
    MongoClient.connect(url, (err, db) => {
      /**
      * Assigns an instance of the MongoDB database to the database constant.
      * @const
      */
      const database = db.db(config.database);
      database.collection('collections').deleteMany({});
      done();
    });
  });

  describe('Index', () => {
    it('should redirect to the products route', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          let redirect = res.redirects[0];
          expect(redirect).to.match(/http:\/\/127.0.0.1:\d{5}\/products/);
          expect(res).to.redirect;
          done();
        });
    });
  });

  describe('/GET products', () => {
    it('should return status code 200', (done) => {
      chai.request(server)
        .get('/products')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Trouva | Products');
          expect(res.text).to.include('Moc Toe Charcoal Ankle Boot');
          done();
        });
    });
  });

  describe('/GET collections', () => {
    it('should return status code 200', (done) => {
      chai.request(server)
        .get('/collections')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Trouva | Collections');
          expect(res.text).to.include('It looks like you don\'t have any collections yet');
          expect(res.text).to.not.include('Homewares');
          done();
        });
    });
  });

  describe('/POST collections', () => {
    /**
     * Assigns a hash mimicking a collection to the collection constant.
     * @const
     * @type {hash}
     * @default
     */
    const collection = {
      name: 'Homewares',
      products: [],
    };
    it('should POST a new collection', (done) => {
      chai.request(server)
        .post('/collections')
        .send(collection)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Homewares');
          done();
        });
    });
  });

  describe('/POST collections/:id', () => {
    /**
     * Assigns a hash mimicking that created by /POST collections/:id to the IDs constant.
     * @const
     * @type {hash}
     * @default
     */
    const IDs = {
      productId: 4,
      collectionId: '5a83f62d7bf1e73233481704',
    };
    it('should POST a collection ID and product ID', (done) => {
      chai.request(server)
        .post(`/collections/${IDs.collectionId}`)
        .send(IDs)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.eq('Product has been successfully added to collection.');
          done();
        });
    });
  });
});
