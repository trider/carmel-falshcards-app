import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';
import Welcome from './Welcome';
import * as data from '../data/data'

class Terms extends Component {
	


	render() {
		const terms = JSON.stringify(data.terms)
		const list = data.terms
		return (
			<div>
				<Welcome name={'Terms for ' + this.props.name} />
				<p>{terms}</p>
			</div>
		);
	}
}

export default Terms;
