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

    firebase.initializeApp(localConfig);
    this.getPhotos();
  }

  getPhotos() {
    return firebase.database().ref('/images').once('value').then((snapshot) => {
      this.setState({images: snapshot});
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <div>
        <Gallery/>
        <Upload/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
