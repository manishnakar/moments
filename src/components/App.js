'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Gallery from './Gallery';
import Upload from './Upload';
import NavBar from './NavBar';
import AuthModal from '../containers/AuthModal';

let localConfig = process.env.API_KEY ? {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
} : require('../../env');

firebase.initializeApp(localConfig);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleries: [],
      signingIn: false,
    };

    this.getGalleries();
    this.signIn = this.signIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getGalleries() {
    let galleries = [];

    return firebase.database().ref('/galleries').once('value').then((snapshot) => {
      let data = snapshot.val();
      for (let gallery in data) {
        galleries.push(data[gallery]);
      }

      this.setState({galleries});
    });
  }

  closeModal() {
    this.setState({signingIn: false});
  }

  signIn() {
    this.setState({signingIn: true});
  }

  render() {

    let galleries = this.state.galleries.map((gallery, i) => {
      return (
        <Gallery key={i} gallery={gallery} />
      );
    });

    let signingIn = false;
    if (this.state.signingIn) {
      signingIn = <AuthModal closeModal={this.closeModal}/>;
    }

    return (
      <div>
        <NavBar signIn={this.signIn}/>
        <PageHeader>Moments</PageHeader>
        {signingIn}
        {galleries}
        <Upload />
      </div>
    );
  }
}

export default App;
