/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: this.props.count
    }
  },

  render: function() {
    return <button onClick={this._increment}>{this.state.count}</button>;
  },

  _increment: function() {
    this.setState({ count: this.state.count + 1 });
  }
});