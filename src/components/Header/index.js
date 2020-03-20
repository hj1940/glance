import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
      return (
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <input type="text" placeholder="Search.."/>
        </div>
      );
    }
}

export default Header;
