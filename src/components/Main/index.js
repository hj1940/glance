import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
      return (
        <div className="topnav">
          <a className="active" href="#home">스페셜 라벨</a>
          <a href="#about">마스터 라벨</a>
          <a href="#contact">패키지</a>
          <input type="text" placeholder="Search.."/>
        </div>
      );
    }
}

export default Header;
