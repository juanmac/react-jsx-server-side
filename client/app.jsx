/** @jsx React.DOM */

// Make global to use react-dev-tools in Chrome
React = require('react');

var TheAmazingButton = require('./components/button.jsx');

var App = module.exports = React.createClass({
  getInitialState: function() {
    return this.props
  },

  render: function() {
    return <TheAmazingButton count={this.state.count}/>;
  }
})

if (typeof window !== 'undefined') {
  var container = document.getElementById("container");
  var state = JSON.parse(document.getElementById("stateStore").innerHTML);
  React.renderComponent(App(state), container);
}
