'use strict';

import React, {Component} from 'react';

class Upload extends Component {
  render() {
    return (
      <form>
        Name: <input type="text" />
        Description: <input type="text" />
        <button>Upload</button>
      </form>
    )
  }
}

export default Upload;
