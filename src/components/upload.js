'use strict';

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import firebase from 'firebase';
import crypto from 'crypto';

require('../../env');

class Upload extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      imageName: '',
      imageDesc: '',
      imageKey: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.addImageToDB = this.addImageToDB.bind(this);
  }

  onInputChange(value, field) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  addImageToDB() {
    let newGalleryRef = firebase.database().ref('images/').push();
    this.setState({imageKey: newGalleryRef.key});
    newGalleryRef.set({
      name: this.state.imageName,
      desc: this.state.imageDesc,
    })
    .then(() => firebase.database().ref(`galleries/${this.props.galleryId}`).once('value'))
    .then(snapshot => {
      let images = snapshot.val().images || [];
      images.push(this.state.imageKey);
      return images;
    })
    .then(images => {
      firebase.database().ref(`users/${this.props.galleryId}`).set({images});
    })
    .catch((err) => console.error(err));
    // firebase stuff, capture name and description and handle upload
    // add firebase ref, upload to aws s3.
  }

  uploadImage() {

    // post to S3
    // add to firebase
    this.addImageToDB();

  }

  render() {

    let policyDoc = {
      'expiration': '2017-01-15T00:00:00Z',
      'conditions': [
        {'bucket': 'moments.images'},
        ['starts-with', '$key', 'uploads/'],
        {'x-amz-acl': 'public-read'},
        {'success_action_redirect': 'http://localhost/'},
        ['starts-with', '$Content-Type', ''],
        ['content-length-range', 0, 1048576],
      ],
    };

    let stringPolicy = JSON.stringify(policyDoc);
    let base64Policy = Buffer(stringPolicy, 'utf-8').toString('base64');

    let hmac = crypto.createHmac('sha1', process.env.AWS_SECRET_ACCESS_KEY);

    let signature = hmac.update(new Buffer(base64Policy, 'utf-8')).digest('base64');

    return (

      <div id="upload">
        <Form horizontal action="https://moments.images.s3.amazonaws.com/" method="post" enctype="multipart/form-data">

          <input type="hidden" name="key" value={`/uploads/${this.state.imageKey}`} />
          <input type="hidden" name="AWSAccessKeyId" value={process.env.ACCESS_KEY_ID} />
          <input type="hidden" name="x-amz-acl" value="public-read" />
          <input type="hidden" name="success_action_redirect" value="http://localhost/" />
          <input type="hidden" name="Policy" value={base64Policy} />
          <input type="hidden" name="X-Amz-Signature" value={signature} />
          <input type="hidden" name="Content-Type" value="image/jpeg" />

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Name:
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" id="imageName" onChange={(e) => this.onInputChange(e.target.value, e.target.id)}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Description:
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Description" id="imageDesc" onChange={(e) => this.onInputChange(e.target.value, e.target.id)} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Description:
            </Col>
            <Col sm={10}>
              <input type="file" placeholder="Description" id="imageFile" name="file" />
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
