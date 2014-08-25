/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: this.props.count
    }
  },

  render: function() {
    return <button onClick={this._increment}>
      <script type="application/json"
        id="stateStore"
        dangerouslySetInnerHTML={{__html: safeStringify(this.props)}}>
      </script>
      {this.state.count}
    </button>;
  },

  _increment: function() {
    this.setState({ count: this.state.count + 1 });
  }
});

// A utility function to safely escape JSON for
// embedding in a <script> tag. Taken from here:
// https://github.com/mhart/react-server-example/blob/master/server.js#L96
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}