'use strict';

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Auth from '../components/Auth';

function AuthModal() {
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

      <Modal.Body>
        <Auth />
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
    </div>
  );
}

export default AuthModal;
