'use strict';

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import firebase from 'firebase';

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
  }

  onInputChange(value, field) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  uploadImage(event) {
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

  render() {
    return (
      <div id="upload">
        <Form horizontal>

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
