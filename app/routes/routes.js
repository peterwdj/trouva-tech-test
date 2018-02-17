'use strict';

/** Routing file for application
 * @module routes/routes
 * @requires collection
 * @requires mongodb.ObjectID
 */

/**
 * collection module
 * @const
 */
const Collection = require('./../lib/collection');

/**
 * mongodb.ObjectID module
 * @const
 */
const ObjectID = require('mongodb').ObjectID;


/**
 * @function
 * @name routes
 * @param {object} app - An instance of the Express framework.
 * @param {object} db - A connection to a MongoDB database.
 */
function routes(app, db) {
  /**
   * Route serving index page, redirecting to products page.
   * @name get/
   * @function
   * @memberof module:routes~routesRoutes
   * @inner
   * @param {string} path - Express path
   * @param {callback} middlewear - Express middlewear.
   */
  app.get('/', (req, res) => {
    res.redirect('/products');
  });

  /**
   * Route serving products page.
   * @name get/products
   * @function
   * @memberof module:routes~routesRoutes
   * @inner
   * @param {string} path - Express path
   * @param {callback} middlewear - Express middlewear.
   */
  app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, products) => {
      db.collection('collections').find().toArray((error, collections) => {
        res.render('pages/products', { products, collections });
      });
    });
  });

  /**
   * Route serving collections page.
   * @name get/collections
   * @function
   * @memberof module:routes~routesRoutes
   * @inner
   * @param {string} path - Express path
   * @param {callback} middlewear - Express middlewear.
   */
  app.get('/collections', (req, res) => {
    db.collection('collections').find().toArray((err, result) => {
      res.render('pages/collections', { collections: result });
    });
  });

  /**
   * Route creating a new collection and redirecting to get/collections.
   * @name post/collections
   * @function
   * @memberof module:routes~routesRoutes
   * @inner
   * @param {string} path - Express path
   * @param {callback} middlewear - Express middlewear.
   */
  app.post('/collections', (req, res) => {
    /**
     * Assigns the collection constant the value of the request body's name.
     * @const
     * @type {function}
     * @default
     */
    const collection = new Collection(req.body.name);
    db.collection('collections').save(collection);
    res.redirect('/collections');
  });

  /**
   * Route adding a product to a collection.
   * @name post/collections/:id
   * @function
   * @memberof module:routes~routesRoutes
   * @inner
   * @param {string} path - Express path
   * @param {callback} middlewear - Express middlewear.
   */
  app.post('/collections/:id', (req, res) => {
    /**
     * Assigns the collectionId constant the value of the request body's collectionId expressed as a string.
     * @const
     * @type {function}
     * @default
     */
    const collectionId = req.body.collectionId.toString();
    /**
     * Assigns the productId constant the value of the request body's productId.
     * @const
     * @type {function}
     * @default
     */
    const productId = req.body.productId;
    db.collection('products').find({ _id: productId }).toArray((err, result) => {
      db.collection('collections').update(
        { _id: ObjectID(collectionId) },
        { $push: { products: result[0] } }
      );
      res.send('Product has been successfully added to collection.');
    });
  });
}

/**
 * Routes Module, exports all application routes.
 * @module routes
 */
module.exports = routes;
