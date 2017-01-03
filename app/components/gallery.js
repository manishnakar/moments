'use strict';

const React = require('react');
const Image = require('./image');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.images.map(function(image) {
            return <Image key={image.src} src={image.src}></Image>;
          })
        }
      </div>
    );
  },
});
