'use strict';

import React, {Component} from 'react';
import Image from './Image';
import config from '../config';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    console.log(this.props.images);

    let images = this.props.images.map((image, i) => {
      return (
        <Image key={i} src={image.src} />
      );
    });

    return (
      <div>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}

export default Gallery;
