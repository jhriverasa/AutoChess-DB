import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class NavigationBar extends Component {
    render(){
        return (
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand >Auto Chess Mobile Utilities</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#heroes">heroes</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar>
          </div>
        );
    }
}

export default NavigationBar;