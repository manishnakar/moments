'use strict';

import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, Navbar, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Moments</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">Profile</NavItem>
             <NavItem eventKey={2} href="#">Galleries</NavItem>
           </Nav>
           <Nav pullRight>
             <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1}>Contact</MenuItem>
               <MenuItem eventKey={3.2}>GitHub</MenuItem>
               <MenuItem eventKey={3.3}>LinkedIn</MenuItem>
             </NavDropdown>
             <NavItem eventKey={1} href="#" onClick={ this.props.signIn}>Sign In</NavItem>
             <NavItem eventKey={2} href="#">Log Out</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default NavBar;
