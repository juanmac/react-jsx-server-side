react-jsx-server-side
=====================

A simple demo showing how one can render a React application on the server side, without losing reactivity on the client.

## Getting Started

- Install dependencies `npm install`
- Start the server `npm start`
- Have fun with that amazing button at `localhost:3000`
- Hack the code!

## Highlights
- On the *node* side one can transparently require() JSX code thanks to [node-jsx](https://github.com/petehunt/node-jsx)
- The application code is served to the client in a unique bundle thanks to [connect-browserify](https://github.com/andreypopp/connect-browserify).

**NOTE:** This demo was entirely inspired by [this article](http://www.princeton.edu/~crmarsh/react-ssr/) published by [Charlie Marsh](https://github.com/crm416) (August 2014), as well as the valuable resources he recommends at the end, so read it!

This is a simple demo, don't use it in production.

