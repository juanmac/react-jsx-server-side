/**
 * dependencies
 */
var express = require('express');
var React = require('react');
var browserify = require('connect-browserify');
var app = express();

// transparently require() JSX code from node
require('node-jsx').install({extension: '.jsx'});

var state = { count: 7 };
var ReactApp = require('./client/app.jsx');
var ReactAppMarkup = React.renderComponentToString(ReactApp(state));

// @andreypopp: "You should never use this middleware in production — use
// nginx for serving pre-built bundles to a browser."
app.use('/bundle.js', browserify({
  entry: __dirname + '/client/app.jsx',
  transforms: ['reactify']
}));

app.use(function(req, res){
  res.send(
    '<div id="container">' + ReactAppMarkup + '</div>' +
    '<script src="/bundle.js"></script>'
  );
});

app.listen(3000, function(){
  console.log('server listen at localhost:3000');
});