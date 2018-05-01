import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';

class Terms extends Component {
	render() {
		return (
			<h1 className="App-title">Terms for {this.props.name}</h1>
		);
	}
}

export default Terms;
