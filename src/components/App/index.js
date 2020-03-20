import React, { Component } from 'react';
import './index.css';
import Header from '../Header'
import Main from '../Main'

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
          <div className="App-title">
            {/*<p>메이플스토리 캐시 아이템 한눈에</p>*/}
          </div>
          <Header/>
        </div>
        <div className="contents-slide">
          <Main/>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
