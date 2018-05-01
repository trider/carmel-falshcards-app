import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default Home;
