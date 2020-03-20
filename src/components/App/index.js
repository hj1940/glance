import React, { Component } from 'react';
import './index.css';
import Header from '../Header'

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }
  render() {
    return (
      <div className={"App"}>
        <div className="App-header" id="header">

        </div>
        <div className="contents-main">

        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
