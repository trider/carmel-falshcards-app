import React, {Component} from 'react';
import Welcome from './Welcome';
import Terms from './Terms';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isPopulated: false,
      displayTerms: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayText(text) {
    if (text.length > 0) {
      this.setState({
        isPopulated: true,
        displayTerms: true,
      })
    } 
    else {
      this.setState({
        isPopulated: false,
        displayTerms: false,
      })
    }   
  }

  displayTermsComponent(text) {
    if (text.length > 0) {
      this.setState({displayTerms: true})
    } 
    else {
      this.setState({ displayTerms: false })
    }   
  }
  
  
  handleChange(event) {
    this.setState({ name: event.target.value });
    this.displayText(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.displayText(this.state.name)
  }

  displayTerms() {
      return this.state.isPopulated ? (<Terms name={this.state.name}/>): (<div></div>)
  }

  displayName() {
    return this.state.isPopulated
  ? (<p className="App-intro"></p>)
  : (<p className="App-intro">Please type your name</p>)
  }

  displayForm() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name={this.state.name} onChange={this.handleChange}/>
            </label>
          <input type="submit" name="Submit"/>
        </form>
      </div>
 
    )
  }

  render() {
    return (
      <div className="App">
        < Welcome />    
        {this.displayName()}
        {this.displayForm()}
        {this.displayTerms()}
      </div>

    );
  }
}

export default Home;
