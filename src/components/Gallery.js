'use strict';

import React, {Component} from 'react';
import firebase from 'firebase';

import Image from './Image';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);

    this.getPhotos();

    this.state = {
      images: [],
    };
  }

  getPhotos() {
    let images = null;

    this.props.images.map((image) => {
      console.log(image);
      // use the image IDs coming in on the gallery to look them up one by one in firebase and then add them to an array.
    });


    this.setState({images});
  }


  render() {
    let images = null;

    if (this.state.images) {
      images = this.state.images;
      for (let image in images) {
        // console.log(image, 'should be image key');
        return <Image key={image}/>;
      }
    }

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
