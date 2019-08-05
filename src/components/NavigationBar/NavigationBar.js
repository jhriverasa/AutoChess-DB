import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigationbar-styles.css';

import { Link } from "react-router-dom";


class NavigationBar extends Component {
    render(){
        return (

          <div>
            <Navbar variant="dark">
              <Navbar.Brand >Auto Chess Mobile Utilities</Navbar.Brand>
              <Nav className="mr-auto">
              <li><Link className="NavLink" to="#home">Home</Link></li>
              <li><Link className="NavLink" to="/news">News</Link></li>
              <li><Link className="NavLink" to="/Pieces">Pieces</Link></li>
              <li><Link className="NavLink" to="#about">About</Link></li>
              </Nav>
            </Navbar>
          </div>

        );
    }
}

export default NavigationBar;