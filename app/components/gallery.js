'use strict';

import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
  render() {
    return (
      <div>
        {
          this.props.images.map(function(image) {
            return <Image key={image.src} src={image.src}></Image>;
          })
        }
      </div>
    )
  }
};

export default Gallery;
