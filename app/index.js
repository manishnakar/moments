'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';

class App extends Component {
  render() {
    return <Gallery images={[{src: '../../assets/img/beauty.jpg'}]}></Gallery>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
