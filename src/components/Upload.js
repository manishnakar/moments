'use strict';

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

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
      <div id="upload">
        <Form horizontal>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Name:
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Description:
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Description" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.uploadImage} bsStyle="primary" type="submit">
                Upload
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default Upload;
