'use strict';

import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

class Auth extends Component {
  constructor(props) {
    super(props);
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
              <FormControl type="text" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
            Password:
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col mdOffset={0} sm={4}>
              <Button onClick={this.login} bsStyle="primary" type="submit">
                Log In
              </Button>
              <Button onClick={this.signup} bsStyle="primary" type="submit">
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
