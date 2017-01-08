'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';

import Gallery from '../components/Gallery';
import AddGallery from '../components/AddGallery';

class Galleries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [],
    };

    this.getGalleries();
  }

  getGalleries() {
    let galleries = [];

    return firebase.database().ref('/galleries').once('value').then((snapshot) => {
      let data = snapshot.val();
      for (let gallery in data) {
        data[gallery].id = gallery;
        galleries.push(data[gallery]);
      }
      this.setState({galleries});
    });
  }

  render() {

    let galleries = this.state.galleries.map((gallery, i) => {
      return (
        <Gallery key={gallery.id} images={gallery.images} gallery={gallery} />
      );
    });

    return (
      <div>
        {galleries}
        <AddGallery />
      </div>
    );
  }
}

export default Galleries;
