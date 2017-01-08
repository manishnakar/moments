'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';

import Gallery from '../components/Gallery';
import AddGallery from '../components/AddGallery';

class Galleries extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    let galleries = !this.props.galleries ? [] : this.props.galleries.map((gallery, i) => {
      return (
        <Gallery key={gallery} gallery={gallery} />
      );
    });

    return (
      <div>
        {galleries}
        <AddGallery userId={this.props.userId}/>
      </div>
    );
  }
}

export default Galleries;
