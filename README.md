# Trouva Tech Test

[Introduction](#introduction) | [Quickstart](#introduction) | [Development](#development) | [Roadmap](#roadmap) | [Tech Stack](#tech-stack) | [Notes](#notes)

## Introduction

This project is a tech test for [Trouva](https://www.trouva.com/). The specification was to write an application allowing a user to save products they find on Trouva to a collection, outlined in the following four user stories:

  1 - I should be able to view a list of products   
  2 - I should be able to view my collections of products   
  3 - I should be able to create a new collection   
  4 - I should be able to assign a product to a collection

This project is documented at a functional level using [JSDoc](http://usejsdoc.org/). To view this documentation, open the file located at `out/index.html`.


## Quickstart

Before running this project, please ensure that you first have [Node](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), and [MongoDB](https://www.mongodb.com/) installed. If you need to start MongoDB manually, then please do so.

To run this application, clone this repository, and from the root directory of the project install the dependencies:

```
npm install
```

Once the project dependencies have been installed, you will be able to start a local server:
seedProducts
```
npm start
```

To use the application, visit http://localhost:8000/.


## Development

*Testing*   
Tests are run using the [Mocha](https://mochajs.org/) testrunner and the [Chai](http://chaijs.com/) assertion library. They can be run the in two ways:

```
npm test                        // runs the entire test suite
mocha path/to/file.js           // runs a specific file of tests

```

Test coverage is currently 100% (verified by [Istanbul](https://istanbul.js.org/)).

*Linting*   
This project uses [ESLint](https://eslint.org/) to ensure code is written in a consistent manner. ESLint can be run with the following command:
```
npm run linter
```

*Editing the code*   
If you would like to edit the code further and continue working, it is recommended to do so with [Nodemon](https://nodemon.io/), which will automatically restart the server when changes are made, instead of with Node. To do so, just run:
```
npm run dev
```

If you would like to make any aesthetic/styling changes, then do so in [Sass](https://sass-lang.com/). You can use the [Bulma](https://bulma.io/) CSS framework which is set up to work with this project. After making any changes to the SCSS file, you will need to compile the CSS file to see any changes you make. This can be done easily by running:
```
npm run sass:compile
```

*Documenting the code*   
If any changes are made to the JavaScript, please take the time to document the code. To do so, leave a [JSDoc](http://usejsdoc.org/about-getting-started.html) comment on the new or changed code, and then add it to out/index.html:

```
./node_modules/.bin/jsdoc path/to/file.js
```


## Roadmap

This project has been built to fulfill the minimum requirements of the four user stories. As such, there are several features that are missing even from this basic implementation. These include:
 - A view for individual products
 - A view for an individual collection, allowing the user to see which products are in a collection (see [notes](#notes) for further details on this)
 - Guard feature that prevents the user adding the same product to a single collection multiple times
 - Updating collections and inputting further information, such as a cover image, optional description etc. (see [notes](#notes))
 - The ability to remove a product from a collection


There are other features that might make sense to be added to the application in the future, including (but not limited to):
 - Pagination (loading 500 products at once is slow)
 - Product filtering
 - Search
 - Sharing collections via email and social media
 - Collaborative collections with other Trouva users
 - Suggested products, using unsupervised machine learning to identify a cohesive style/aesthetic across a collection and recommend other products

I am treating this project as the development of the 'Collections' feature in isolation. As such, future features such as integration with Trouva's user sign-in, or adding a footer to the page, have been left off this list but, needless to say, would need to be implemented if this project were integrated into Trouva's application.


## Tech Stack

This project is built in full-stack JavaScript, using the following technologies:

| Technology  |  Purpose  |
| ---         |    ---    |
| Node        | Server-side JavaScript |
| Nodemon     | Server-side JavaScript whilst developing |
| EJS         | Rendering views and injecting logic |
| CSS/Sass    | Styling the application |
| jQuery      | To dynamically alter the HTML of the page |
| Bulma       | Styling framework |
| Mocha       | Test-runner |
| Chai        | Test assertion library |
| ESLint      | Linting tool, used with the Airbnb style guide |
| Istanbul    | Test coverage tool |
| JSDoc       | Documentation generator |


## Notes

*Collections*   
When creating this project, I considered adding a view for individual collections, allowing the user to verify that something had happened when they added the product to a collection. I chose instead to insert a message onto the page telling the user that the product had been added after clicking the Add button, and to display the number of items in a collection on the collections view, which seemed like a more minimal way of providing the same confirmation.

*Embedded JavaScript*   
I am aware that the decision to use [EJS](http://ejs.co/) for the front end of the application is an unconventional one. Given that this project was explicitly just a prototype, I opted to use EJS due to its simplicity and familiarity (although I had not used it before, I have, of course, used both HTML and JavaScript), both of which would speed up development time. Being able to use partials to modularise the pages was also attractive. Having used EJS, I now appreciate many of its limitations - injecting a page title, for example, feels like it should be much simpler, as do page templates. Additionally, the combination of JavaScript and HTML in a single file makes for poor readability. Were I to rebuild this application, I would make use of a more powerful front-end framework; from some brief research [Vue JS](https://vuejs.org/) which enables templating, is, by all reports, simple to use and quick to pick up, and has a testing framework, seems like it might be an appropriate choice.

*Collections/:id post route*   
Currently, this is the route that handles adding a product to a collection (updating a collection by inserting a new product into it). However, as more features are added, this route might seem better suited to updating information about a collection.

*Routes*  
RESTful routes are plural rather than singular, as on Trouva's website.

*Linting*   
There exists some conflicts between the Airbnb ESLint style guide and other tools used in this project - the guide, for example, says that strict mode is unnecessary, whilst Mocha will not recognise scoped `let` or `const` statements outside of strict mode. These errors, where they exist, have been ignored.

*Known bugs*   
There is a bug when creating a collection that means that the newly-created collection does not always appear on the page, and the page must be manually reloaded to see it. I have not been able to consistently reproduce this behaviour.

*Data sanitation*   
Were this app to be deployed into production, there would need to be some sort of sanitation of the data contained in *products.json*. This can be seen in, for example, one product having the title 'white Oxford Cotton Shirt."Belavista"'.

*Images*   
Similar to the above, if this application were to be deployed to a real-world setting, there would need to be some sort of standardisation of images to display them consistently. Currently, images have different resolutions and aspect ratios, which leads to some images being distorted. The 3:2 aspect ratio seems to produce the least distortion.

*Style and aesthetics*   
The application has been styled with a similar aesthetic as the Trouva website, using the same colour palette and a similar sans-serif font. I have tried to riff on this original theme somewhat, and the visual identity of the application has been shaped by the components and style of the Bulma framework. The cursive, handwriting-esque sub-titles on each page are an attempt to play around with the delightfully whimsical feel of the word *la trouvaille*, and Trouva's catalogue of hand-crafted products.


-----

If you have any suggestions either for this project or the documentation, please [open an issue](https://github.com/peterwdj/trouva-tech-test/issues/new).
