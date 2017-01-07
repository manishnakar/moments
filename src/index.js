'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import Upload from './components/Upload';

class App extends Component {
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
