'use strict';

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Auth from '../components/Auth';

function AuthModal(props) {
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

      <Modal.Body>
        <Auth getUser={props.getUser}/>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>

    </Modal.Dialog>
    </div>
  );
}

export default AuthModal;
