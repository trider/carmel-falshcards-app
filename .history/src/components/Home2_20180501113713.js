import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isPopulated: false
    };

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  checkName(event) {
    if (event.target.value !== '' && event.target.value.length > 0) {
      this.setState({name: event.target.value, isPopulated: true})
    } else {
      this.setState({name: '', isPopulated: false})

    }
  }

  handleChange(event) {
    this.checkName(event)
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  displayForm() {

    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name={this.state.name} onChange={this.handleChange}/>
          </label>
          <input type="submit" name="Submit"/>
        </form>
    )
    

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">Please type your name</p>
        
      </div>

    );
  }
}

export default Home;
