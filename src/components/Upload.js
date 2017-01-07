'use strict';

import React, {Component} from 'react';

class Upload extends Component {
  constructor(props, context) {
    super(props, context);
  }

  uploadImage(event) {
    console.log('uploading image');
    // firebase stuff, capture name and description and handle upload
    // add firebase ref, upload to aws s3.
  }

  render() {
    return (
      <form>
        Name: <input type="text" />
      Description: <input type="text" />
    <button onClick={this.uploadImage}>Upload</button>
      </form>
    );
  }
}

export default Upload;
