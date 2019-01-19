import React, { Component } from 'react';

// importing navigation 
import Nav from './nav'
import logo from '../logo.svg';
class Header extends Component {
  render() {
    return (
      <header>
          <img src={logo} alt="Logo"  width="100px"/>
          <Nav></Nav> 
      </header>
    );
  }
}

export default Header;