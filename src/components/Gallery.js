'use strict';

import React, {Component} from 'react';
import firebase from 'firebase';

import Image from './image';
import Upload from './upload';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      images: [],
    };
  }

  getPhotos() {
    firebase.database().ref(`galleries/${this.props.gallery}`).once('value')
    .then((snapshot) => this.setState({images: snapshot.val().images}))
    .catch(console.error);
  }

  render() {
    let images = this.state.images.map(image => {
      return (
        <div>
          <Image image={image} />
        </div>
      );
    });

    return (
      <div>
        <ul>
          {images}
          <Upload galleryId={this.props.gallery} />
        </ul>
      </div>
    );
  }
}

export default Gallery;
