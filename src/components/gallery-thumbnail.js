'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';

class GalleryThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: '',
    };
  }

  componentDidMount() {
    firebase.database().ref(`galleries/${this.props.gallery}`).once('value')
    .then((snapshot) => this.setState({gallery: snapshot.val()}))
    .catch(console.error);
  }

  render() {
    console.log(this.state)
  }
}

export default GalleryThumbnail;
