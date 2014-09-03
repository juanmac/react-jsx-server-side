# react-jsx-server-side

Documentación en [**español aquí**](https://github.com/juanmac/react-jsx-server-side/blob/master/LEAME.md)

A simple demo showing how one can render a [ReactJS](http://facebook.github.io/react/) application **server-side** (in NodeJS), without losing *reactivity* on the client. It was entirely inspired by [this article](http://www.princeton.edu/~crmarsh/react-ssr/) published by [Charlie Marsh](https://github.com/crm416) (August 2014), as well as the valuable resources he recommends at the end, so if you need to know more about what this is all about, read it!

**This is a simple demo, don't use it in production.**

## Getting Started

- Install dependencies `$ npm install`
- Start the server `$ npm start`
- Have fun with that amazing button at `localhost:3000`
- Explore the code

## Features
* On the server you can transparently `require()` JSX code thanks to [node-jsx](https://github.com/petehunt/node-jsx).
* React components are `required()`, compiled and rendered in a per-request basis. You can edit the `.jsx` files and the server will always send a fresh updated html markup to the client in every request, without having to restart the server, much like you would with most templating systems such as `jade` or `ejs`.
* The browser receives the whole application code (including react) in a unique bundle thanks to [connect-browserify](https://github.com/andreypopp/connect-browserify) This file is also re-bundled automatically whenever a change is made to the app code.

**Note:** This demo uses some dirty *hacks* only suitable for development stage and really bad for production, in such a case:

* Don't use [node-jsx](https://github.com/petehunt/node-jsx), use [react-tools](https://www.npmjs.org/package/react-tools) to compile all your JSX code to JS before `require()` it.
* Don't use [connect-browserify](https://github.com/andreypopp/connect-browserify) to generate the `bundle.js` on the server, instead use [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/) to compile, minify and compress everything in a previous step, serve the bundle as a simple static file.
* On the server you should render the HTML markup just once at server startup, and NOT in every request.
## Last updates:

**0.0.3 / 2014-09-03**

* add a middleware to clear `.jsx` files from `require` cache in every request
* add `watch: true` option to connect-browserify to re-bundle when editing
* update documentation

See [History.md](https://github.com/juanmac/react-jsx-server-side/blob/master/History.md) for a complete list of changes.