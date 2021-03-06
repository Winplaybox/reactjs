import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import logo from '../logo.svg';
// import { Navbar } from 'react-bootstrap';
class Nav extends Component {
  render() {
    return (
      <nav  className="navbar navbar-expand-sm bg-dark navbar-dark">
         
         <Link to="/" className='navbar-brand'><img src={logo} alt="Logo"  width="50px"/></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
         
         
          <div id="collapsibleNavbar" className="navbar-collapse collapse">
          <ul className="navbar-nav">
              <li className="nav-item"><Link to='/'  className="nav-link active" >Home</Link></li>
              <li className="nav-item"><Link to='/Aboutus' className="nav-link " >About us</Link></li>
              <li className="nav-item"><Link to='/Contactus' className="nav-link " >Contact us</Link></li>
              <li className="nav-item"><Link to='/Modal' className="nav-link " >Modal Example</Link></li>
              <li className="nav-item"><Link to='/menu' className="nav-link " >Menu</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  Dropdown link
                </a>
                <div className="dropdown-menu">
                <Link to='/slide' className="dropdown-item" >Slide</Link>
                <Link to='/'  className="dropdown-item" >Home</Link>
                <Link to='/'  className="dropdown-item" >Home</Link>
                </div>
              </li>
          </ul>
          </div>
      </nav>
    );
  }
}

export default Nav;