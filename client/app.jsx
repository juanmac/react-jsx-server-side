/** @jsx React.DOM */

// Make global to use react-dev-tools in Chrome
React = require('react');

var safeStringify = require('./utils/index.js').safeStringify;
var TheAmazingButton = require('./components/button.jsx');

var App = module.exports = React.createClass({
  getInitialState: function() {
    return this.props
  },

  render: function() {
    return <div>
      <script type="application/json"
        id="stateStore"
        dangerouslySetInnerHTML={{__html: safeStringify(this.props)}}>
      </script>
      <TheAmazingButton count={this.state.count}/>
    </div>;
  }
})

if (typeof window !== 'undefined') {
  var container = document.getElementById("container");
  var state = JSON.parse(document.getElementById("stateStore").innerHTML);
  React.renderComponent(App(state), container);
}
