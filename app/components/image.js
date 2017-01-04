'use strict';

import React, { Component } from 'react';

const image = {};

module.exports = class Image extends Component {
  render() {
    return (
      <img src={this.props.src}></img>
    )
  }
};
