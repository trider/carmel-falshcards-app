import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';

class Home extends Component {	
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">Please type your name</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" name="Submit"/>
        </form>
      </div>

    );
  }
}

export default Home;
