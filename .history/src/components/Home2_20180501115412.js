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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayText(text) {
    if (text.length > 0) {
      this.setState({isPopulated: true})
    } 
    else {
      this.setState({isPopulated: false})
    }
    
  }
  
  
  displayAlert() {
    if (this.state.name.length > 0) {
      alert('A name was submitted: ' + this.state.name);
    } 
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.displayAlert()
    this.displayText(this.state.name)
  }

  displayName() {
return this.state.isPopulated
  ? (<p className="App-intro">Your name is: {this.state.name}</p>)
  : (<p></p>)
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
        {this.displayForm()}
        {this.displayName()}
      </div>

    );
  }
}

export default Home;
