import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Aboutus'>About us</Link></li>
              <li><Link to='/Contactus'>Contact us</Link></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;