'use strict';

import React, {Component} from 'react';

class Upload extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      newImage : {
        id: 0,
        // manually set inside of uploadImage
        name: '',
        description: '',
        src: '',
      },
    };
  }

  uploadImage(event) {
    console.log('uploading image');
    // firebase stuff, capture name and description and handle upload
    // add firebase ref, upload to aws s3.
    firebase.database.ref('/images/' + this.state.newImage.id).set(this.state.newImage);
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    return (
      <form>
        Name: <input type="text" onChange={this.updateName}/>
      Description: <input type="text" onChange ={this.updateDescription}/>
    <button onClick={this.uploadImage}>Upload</button>
      </form>
    );
  }
}

export default Upload;
