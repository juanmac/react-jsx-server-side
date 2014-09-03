/**
 * dependencies
 */
var path = require('path');
var express = require('express');
var React = require('react');
var browserify = require('connect-browserify');
var app = express();

// node-jsx allow us transparently require() JSX code from node..
require('node-jsx').install({extension: '.jsx'});

var state = { count: 7 }; // initial state for the app

/**
 * serve the app bundle to the client via "connect-browserify". App files will
 * be watched for changes. you can edit the components and the bundle will be
 * recompiled as needed, the client will always receive an updated version..
 * 
 * @andreypopp: "You should never use this middleware in production — use nginx
 * for serving pre-built bundles to a browser."
 */
app.use('/bundle.js', browserify({
  entry: __dirname + '/client/app.jsx',
  transforms: ['reactify'],
  watch: true
}));

/**
 * This middleware removes ".jsx" files from the `require` cache in a
 * per-request basis. React components can be then required, re-compiled and
 * re-rendered in every request which mean that you can edit ".jsx" files and
 * see the changes as you go without having to restart the server.
 * Use in development only.
 */
app.use(function(req, res, next){
  for(var _path in require.cache){
    if(path.extname(_path) == '.jsx'){
      delete require.cache[_path];
    }
  }
  next();
});

/**
 * require, compile, render and send the markup..
 */
app.use(function(req, res){
  // We `require` .jsx files in every request..
  var ReactApp = require('./client/app.jsx');
  var ReactAppMarkup = React.renderComponentToString(ReactApp(state));
  
  res.send(
    '<div id="container">' + ReactAppMarkup + '</div>' +
    '<script src="/bundle.js"></script>'
  );
});

app.listen(3000, function(){
  console.log('server listen at localhost:3000');
});