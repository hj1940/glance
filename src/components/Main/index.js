import React, { Component } from 'react';
import './index.css';
import Img from './test.png';

class Main extends Component {
  render() {
      return (
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
                <img className="Img" src={Img} alt="Img"/>
              <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 3</div>
                <img className="Img" src={Img} alt="Img"/>
              <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
                <img className="Img" src={Img} alt="Img"/>
              <div className="text">Caption Three</div>
            </div>

            <a className="prev" >&#10094;</a>
            <a className="next" >&#10095;</a>
          </div>
      );
    }
}

export default Main;
