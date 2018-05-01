import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';

class Home extends Component {
constructor(props) {
  super(props);
  this.state = {
    value: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
    
  );
}
}

export default Home;