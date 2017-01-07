'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import config from './config';

import Gallery from './components/Gallery';
import Upload from './components/Upload';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
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
