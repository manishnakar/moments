'use strict';

const React = require('react');

const image = {};

module.exports = React.createClass({
  render: function() {
    return (
      <img src={this.props.src}></img>
    );
  },
});
