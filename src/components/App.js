'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Galleries from '../containers/Galleries';
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
      user: null,
    };

    this.signIn = this.signIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getGalleries = this.getGalleries.bind(this);
  }

  closeModal() {
    this.setState({signingIn: false});
  }

  signIn() {
    this.setState({signingIn: true});
  }

  getUser(user) {
    this.setState({user});
    this.getGalleries();
  }

  getGalleries() {
    firebase.database().ref(`users/${this.state.user}`).once('value')
    .then((snapshot) => this.setState({galleries: snapshot.val().galleries}))
    .catch(console.error);
  }


  render() {
    let inProcessOfSigningIn = false;
    let signedIn = false;

    if (this.state.signingIn) {
      inProcessOfSigningIn = <AuthModal closeModal={this.closeModal} getUser={this.getUser} />;
    }

    if (this.state.user) {
      signedIn = (
        <Galleries userId={this.state.user} galleries={this.state.galleries}/>
      );
    }

    return (
      <div>
        <NavBar signIn={this.signIn}/>
        <PageHeader>Moments</PageHeader>
        {inProcessOfSigningIn}
        {signedIn}
      </div>
    );
  }
}

export default App;
