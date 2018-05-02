import React, {Component} from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';
import Welcome from './Welcome';
import * as data from '../data/data'

class Terms extends Component {

getTerms() {
	const terms = data.terms.map((term) => <div className="Term-container" key={term.id}>
			<p className="Term-title">{term.id}: {term.name}</p>
			<p className="Term-body">{term.description}</p>
		</div>);
	return terms
}

	render() {
		return (
			<div>
				<Welcome name={'Terms for ' + this.props.name}/>
				{this.getTerms()}
			</div>
		);
	}
}

export default Terms;
