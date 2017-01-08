'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { Alert, Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      this.setState({success: 'Successfully Signed Up!'});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  logIn() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      this.setState({success: 'Successfully Logged In!'});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  onInputChange(value, field) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  render() {

    let alert = null;

    if (this.state.error) {
      alert = (
      <Alert bsStyle="warning">
        <strong>{this.state.error}</strong>
      </Alert>
      );
    }

    if (this.state.success) {
      alert = (
      <Alert bsStyle="success">
        <strong>{this.state.success}</strong>
      </Alert>
      );
    }

    return (
      <div id="auth">
        <Form horizontal>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Username:
            </Col>
            <Col sm={10}>
              <FormControl id="email" type="email" placeholder="Email" onChange={(e) => this.onInputChange(e.target.value, e.target.id)}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Password:
            </Col>
            <Col sm={10}>
              <FormControl id="password" type="password" placeholder="Password" onChange={(e) => this.onInputChange(e.target.value, e.target.id)}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col mdOffset={0} sm={4}>
              <Button onClick={this.logIn} bsStyle="primary">
                Log In
              </Button>
              <Button onClick={this.signUp} bsStyle="primary">
                Sign Up
              </Button>
            </Col>
          </FormGroup>

          {alert}

        </Form>

      </div>
    );
  }
}

export default Auth;
