import React, { Component } from 'react';

// importing navigation 
import Nav from './nav'
class Header extends Component {
  render() {
    return (
      <header>
          {/* <div className="jumbotron text-center">
            <h1>My First Bootstrap 4 Page</h1>
            <p>Resize this responsive page to see the effect!</p> 
          </div> */}
          <Nav></Nav> 
      </header>
    );
  }
}

export default Header;