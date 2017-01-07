'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import config from './config';
import localConfig from '../env';

import Gallery from './components/Gallery';
import Upload from './components/Upload';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    firebase.initializeApp(localConfig);
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
        <Gallery images={this.state.images}/>
        <Upload/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
