import React, { Component } from 'react';
import './index.css';
import Img from './test.png';

var slideIndex = 0;

class Main extends Component {
  componentDidMount() {
    this.showSlides();
  }

  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }

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

            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
          </div>
      );
    }
}

export default Main;
