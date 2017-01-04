'use strict';

import React, { Component } from 'react';

const image = {};

class Image extends Component {
  render() {
    return (
      <img src={this.props.src}></img>
    )
  }
};

export default Image;
