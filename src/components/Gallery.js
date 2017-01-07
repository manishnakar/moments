'use strict';

import React, {Component} from 'react';
import Image from './Image';
import config from '../config';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      images: [],
    };

    // this.imagesRef = firebase.database().ref('/images');
    // this.listenForChanges = this.listenForChanges.bind(this);
  }

  // listenForChanges(ref) {
  //   ref.once('value')
  //   .then((data) => {
  //     this.setState({
  //       images: data.val(),
  //     });
  //   });
  // }

  // componentDidMount() {
  //   this.listenForChanges(this.imagesRef);
  // }

  render() {
    return (
      <div>
        {
          this.state.images.map(function(image) {
            return <Image key={image.src} src={image.src}></Image>;
          })
        }
      </div>
    );
  }
}

export default Gallery;
