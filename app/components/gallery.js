'use strict';

import React, {Component} from 'react';
import Image from './Image';

class Gallery extends Component {

  componentDidMount() {
    console.log('mounted');
    firebase.database().ref('images/').on('value', (snapshot) => {
      const currentImages = snapshot.val();

      if (currentImages) {
        this.setState({
          images: currentImages,
        });
      }
    });
  }

  render() {
    return (
      <div>
        {
          this.props.images.map(function(image) {
            return <Image key={image.src} src={image.src}></Image>;
          })
        }
      </div>
    );
  }
}

export default Gallery;
