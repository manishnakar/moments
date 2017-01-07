'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Gallery from './Gallery';
import Upload from './Upload';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.getPhotos();
  }

  getPhotos() {
    let images = [];

    return firebase.database().ref('/images').once('value').then((snapshot) => {
      let data = snapshot.val();
      for (let image in data) {
        images.push(data[image]);
      }

      this.setState({images});
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <PageHeader>Moments</PageHeader>
        <Gallery images={this.state.images} />
        <Upload />
      </div>
    );
  }
}

export default App;
