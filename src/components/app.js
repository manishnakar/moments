'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Galleries from '../containers/galleries';
import NavBar from './nav-bar';
import AuthModal from '../containers/auth-modal';

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
    this.signOut = this.signOut.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getGalleries = this.getGalleries.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  componentWillMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user.uid});
      } else {
        //browserHistory.push('/signin');
      }
    });
  }

  closeModal() {
    this.setState({signingIn: false});
  }

  handleSignIn() {
    this.setState({signingIn: true});
  }

  handleSignOut() {
    firebase.auth().signOut()
    .then(() => this.setState({user: null}))
    .catch(err => console.log(err));
  }

  getGalleries() {
    firebase.database().ref(`users/${this.state.user}`).once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        this.setState({
          galleries: snapshot.val().galleries || [],
        });
      }
    })
    .catch(console.error);
  }


  render() {
    let inProcessOfSigningIn = false;
    let signedIn = false;

    if (this.state.signingIn) {
      inProcessOfSigningIn = <AuthModal closeModal={this.closeModal} />;
    }

    if (this.state.user) {
      signedIn = (
        <Galleries userId={this.state.user} galleries={this.state.galleries}/>
      );
    }

    return (
      <div>
        <NavBar signIn={this.handleSignIn} signOut={this.handleSignOut}/>
        <PageHeader>Moments</PageHeader>
        {inProcessOfSigningIn}
        {signedIn}
      </div>
    );
  }
}

export default App;
