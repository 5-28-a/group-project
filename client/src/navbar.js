import React, { Component } from 'react';
import './index.css';
import { Button, Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';

class Navibar extends Component {
  render() {
    return (
      <div>
       <Navbar>
         <Navbar.Header className="navbarStyle">
          <Navbar.Brand>
            <a href="#home"><img id="brand-image" src="mvlogopng.png" alt="MVistheMVP" height={40}/>MovieFive</a>
          </Navbar.Brand>
         </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#profile">
            Profile
          </NavItem>
          <NavItem eventKey={2} href="#about">
            About
          </NavItem>
          <NavItem eventKey={3} href="#login">
            Login
          </NavItem>
        </Nav>
  <Navbar.Collapse>
    <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button bsStyle="info" type="submit">Search</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Navibar;