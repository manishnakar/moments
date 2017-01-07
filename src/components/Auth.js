'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  signUp() {

  }

  onInputChange(value, field) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  render() {
    return (
      <div id="auth">
        <Form horizontal>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Username:
            </Col>
            <Col sm={10}>
              <FormControl id="username" type="text" placeholder="Username" onChange={(e) => this.onInputChange(e.target.value, e.target.id)}/>
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
              <Button onClick={this.logIn} bsStyle="primary" type="submit">
                Log In
              </Button>
              <Button onClick={this.signUp} bsStyle="primary" type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default Auth;
