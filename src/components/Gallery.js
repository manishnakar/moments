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

    return firebase.database().ref(`/galleries/${this.props.galleryId}`).once('value').then((snapshot) => {
      let data = snapshot.val();
      console.log(data);
      for (let image in data.images) {
        images.push(data[image]);
      }

      this.setState({images});
    });
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
