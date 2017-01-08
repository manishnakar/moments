'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, PageHeader } from 'react-bootstrap';

class AddGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryName: '',
      galleryDesc: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.addGallery = this.addGallery.bind(this);
  }

  onInputChange(value, field) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  addGallery() {
    let newGalleryRef = firebase.database().ref('galleries/').push();
    newGalleryRef.set({
      name: this.state.galleryName,
      desc: this.state.galleryDesc,
    })
    .then(() => console.log('success'))
    .catch((err) => console.error(err));
  }

  render() {
    let content;
    if (this.state.adding) {
      content = (
        <div id="addGallery">

          <PageHeader><small>Add a Gallery</small></PageHeader>
          <Form horizontal>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
              Name:
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Name" id="galleryName" onChange={(e) => this.onInputChange(e.target.value, e.target.id)} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
              Description:
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Description" id="galleryDesc" onChange={(e) => this.onInputChange(e.target.value, e.target.id)} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.addGallery} bsStyle="primary">
                  Add Gallery
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </div>
      );
    } else {
      content = (
        <Button onClick={() => this.setState({adding: true})} bsStyle="primary">
          Add Gallery
        </Button>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default AddGallery;
