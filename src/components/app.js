'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';
import firebase from 'firebase';

import Galleries from '../components/galleries';
import Gallery from './gallery';
import NavBar from './nav-bar';
import AuthModal from '../components/auth-modal';

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
      galleries: null,
      signingIn: false,
      user: null,
      selectedGallery: null,
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSelectGallery = this.handleSelectGallery.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getGalleries = this.getGalleries.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  componentWillMount() {
    this.authListener();
  }

  componentDidMount() {
    if (this.state.user) {
      this.getGalleries();
    }
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user.uid});
        this.getGalleries();
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
    .then(() => this.setState({user: null, galleries: null, selectedGallery: null}))
    .catch(err => console.log(err));
  }

  handleSelectGallery(galleryId) {
    this.setState({selectedGallery: galleryId});
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
    let selectedGallery = false;

    if (this.state.signingIn) {
      inProcessOfSigningIn = <AuthModal closeModal={this.closeModal} />;
    }

    if (this.state.user && this.state.galleries &&!this.state.selectedGallery) {
      signedIn = (
        <Galleries userId={this.state.user} galleries={this.state.galleries} selectGallery={this.handleSelectGallery}/>
      );
    }
    if (this.state.selectedGallery) {
      selectedGallery = (
        <Gallery galleryId={this.state.selectedGallery}/>
      );
    }

    return (
      <div>
        <NavBar signIn={this.handleSignIn} signOut={this.handleSignOut}/>
        <PageHeader>Moments</PageHeader>
        {inProcessOfSigningIn}
        {signedIn}
        {selectedGallery}
      </div>
    );
  }
}

export default App;
