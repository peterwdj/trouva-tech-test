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

  afterEach(function(done) {
    MongoClient.connect(url, (err, db) => {
      const database = db.db(config.database);
      database.collection('collections').drop();
      done();
    });
  });

  describe('/GET products', () => {
    it('should return status code 200', (done) => {
      chai.request(server)
      .get('/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
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
        done();
      });
    });
  });
});
