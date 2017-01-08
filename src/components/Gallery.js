'use strict';

import React, {Component} from 'react';
import firebase from 'firebase';

import Image from './Image';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);

    this.getPhotos();

    this.state = {
      photos: [],
    };
  }

  getPhotos() {
    let images = [];

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
