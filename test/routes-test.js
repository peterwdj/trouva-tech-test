'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const MongoClient = require('mongodb').MongoClient;
const config = require('./../app/config').getEnv(process.env.NODE_ENV);
const server = require('../app/server');

const expect = chai.expect;
const url = `mongodb://localhost:27017/${config.database}`;

chai.use(chaiHttp);

describe('Test API routes', () => {
  afterEach((done) => {
    MongoClient.connect(url, (err, db) => {
      const database = db.db(config.database);
      database.collection('collections').drop();
      done();
    });
  });

  describe('Index', () => {
    it('should redirect to the products route', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
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
