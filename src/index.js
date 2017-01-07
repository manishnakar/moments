'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './components/App';
import localConfig from '../env';

firebase.initializeApp(localConfig);

ReactDOM.render(<App />, document.getElementById('app'));
