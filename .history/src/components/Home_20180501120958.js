import React, {Component} from 'react';
import Welcome from './Welcome';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="App">
        <Welcome />  
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
