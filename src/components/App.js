'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Galleries from '../containers/Galleries';
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
      user: null,
    };

    this.signIn = this.signIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  closeModal() {
    this.setState({signingIn: false});
  }

  signIn() {
    this.setState({signingIn: true});
  }

  getUser(user) {
    this.setState({user});
  }

  render() {

    let signingIn = false;
    if (this.state.signingIn) {
      signingIn = <AuthModal closeModal={this.closeModal} getUser={this.getUser}/>;
    }

    return (
      <div>
        <NavBar signIn={this.signIn}/>
        <PageHeader>Moments</PageHeader>
        {signingIn}
        <Galleries userId={this.state.user}/>
        <Upload />
      </div>
    );
  }
}

export default App;
