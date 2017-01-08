'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import { Thumbnail } from 'react-bootstrap';

class GalleryThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: '',
    };
  }

  componentDidMount() {
    firebase.database().ref(`galleries/${this.props.gallery}`).once('value')
    .then(snapshot => this.setState({gallery: snapshot.val()}))
    .catch(console.error);
  }

  render() {
    return (
      <Thumbnail id="gallery-thumbnail">
        <p>{this.state.gallery.name}</p>
        <p>{this.state.gallery.desc}</p>
      </Thumbnail>
    );
  }
}

export default GalleryThumbnail;
