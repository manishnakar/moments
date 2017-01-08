'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';

import AddGallery from '../components/add-gallery';
import GalleryThumbnail from '../components/gallery-thumbnail';

class Galleries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [],
    };

    this.updateGalleries = this.updateGalleries.bind(this);
  }

  updateGalleries(galleries) {
    this.setState({galleries});
  }

  render() {

    let galleries = this.props.galleries.map(gallery => {
      return <GalleryThumbnail key={gallery} gallery={gallery} selectGallery={this.props.selectGallery}/>;
    });

    return (
      <div id="galleries">
        <div id="galleries-container">
          {galleries}
        </div>
        <AddGallery userId={this.props.userId} updateGalleries={this.updateGalleries}/>
      </div>
    );
  }
}

export default Galleries;
