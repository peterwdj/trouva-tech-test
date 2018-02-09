# Trouva Tech Test

This project is a tech test for [Trouva](https://www.trouva.com/). It is currently under active developmnet, and this README will be updated in due course.

## Running the tests

To run the entire test suite, simply run:

`mocha`

To run a certain file of tests, run:

`mocha path/to/file.js`


## Tech stack

This project is built in full-stack JavaScript, using the following technologies:
 - Node
 - Mocha
 - Chai
 - eslint
 - Istanbul


## Miscellaneous notes

RESTful routes are plural rather than singular, as per on Trouva website.

Note - performance optimisations by not sending entire json via GET /products, but creating Product objects server side and then sending array of those - but from c. 280ms to c. 45ms (n.b. --> 100ms considered bar for something to feel instantaneous); measured using time in Chai tests.
