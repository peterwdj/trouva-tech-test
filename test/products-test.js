const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Products', () => {
  describe('/GET products', () => {
    it('should return status code 200', (done) => {
      chai.request(server)
        .get('/products')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          // expect(res.body).to.be.a('array');
          done();
        });
    });
  });
});
