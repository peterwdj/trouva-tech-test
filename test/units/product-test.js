const chai = require('chai');
const Product = require('./../../app/lib/product');

const expect = chai.expect;

describe('Product', () => {
  const bowTie = new Product();
  const json = {
    _id: '1234',
    name: 'Bow tie',
    images: [
      { desktop: 'url.jpg' },
    ],
    description: 'Bow ties are cool',
  };
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
  it('creates a product with values from a json object', () => {
    const newBowTie = new Product(json.name, json._id, json.images[0].desktop, json.description);
    expect(newBowTie.name).to.equal('Bow tie');
    expect(newBowTie.id).to.equal('1234');
    expect(newBowTie.image).to.equal('url.jpg');
    expect(newBowTie.description).to.equal('Bow ties are cool');
  });
});
