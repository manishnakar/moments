'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';

import Gallery from '../components/gallery';
import AddGallery from '../components/add-gallery';

class Galleries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [],
    };

    this.updateGalleries = this.updateGalleries.bind(this);
    this.setState({galleries: this.props.galleries});
  }

  updateGalleries(galleries) {
    this.setState({galleries});
  }

  render() {
    // galleries is currently an array of string IDs
    let galleries = this.state.galleries.map(gallery => {
      console.log(gallery);
      return (
        <div>
          <h1>Name: {gallery.name}</h1>
          <h1>Description: {gallery.desc}</h1>
        </div>
        // <Gallery key={gallery} gallery={gallery} />
      );
    });

    return (
      <div>
        {galleries}
        <AddGallery userId={this.props.userId} updateGalleries={this.updateGalleries}/>
      </div>
    );
  }
}

export default Galleries;
