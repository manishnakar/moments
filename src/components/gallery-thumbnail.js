'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import { Thumbnail, Button } from 'react-bootstrap';

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
      <Thumbnail src="" alt="" id="gallery-thumbnail">
        <h3>{this.state.gallery.name}</h3>
        <p>{this.state.gallery.desc}</p>
        <p>
          <Button bsStyle="primary" onClick={() => this.props.selectGallery(this.props.gallery)}>View/Edit</Button>&nbsp;
          <Button bsStyle="default">Delete</Button>
        </p>
      </Thumbnail>
    );
  }
}

export default GalleryThumbnail;
