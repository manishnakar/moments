'use strict';

const React = require('react');
const Gallery = require('./gallery');


module.exports = React.createClass({
  render: function() {
    return <Gallery images={[{src: '../../assets/img/beauty.jpg'}]}></Gallery>;
  },
});
