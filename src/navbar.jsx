import React, { Component } from 'react';
import './nav-menu.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
      
      <ul className='menu'>
          <li  ><a className="dropbtn active" href="/">Home</a></li>

          <div className='dropdown'>
          <li className="itmes "><a className="dropbtn" href="/services">Services</a>
          <ul className='dropdown-content'>
          <li><a href="/Entrepreneurs">For Entrepreneurs</a></li>
          <li><a href="/Students">For Students</a></li>
          <li><a href="/Hobbyists">For Hobbyists</a></li>
          </ul>
          </li>
          </div>
          <li><a className="dropbtn" href="/Contact">Contact</a></li>
      </ul>
      </div>
    );
  }
}

export default NavBar;