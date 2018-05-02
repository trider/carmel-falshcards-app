import React, {Component} from 'react';
import Welcome from './Welcome';
import Cards from './Cards';
import * as data from '../data/data';
import '../styles/App.css';

class Terms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showTerms: true,
		};

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(event) {
		this.setState({showTerms: !this.state.showTerms });
	}
	
	getTerms() {
		const terms = data.terms.map((term) =>
					<div className="Term-container" key={term.id}>
							<p className="Term-title">{term.id}: {term.name}</p>
							<p className="Term-body">{term.description}</p>
				</div>
  );
  return terms
	}

	setList() {
		return this.state.showTerms ? (
			<div>
				<Welcome name={'Terms for ' + this.props.name} />
				<button onClick={this.handleToggle}>Terms</button>
    {this.getTerms()}
			</div>
			):
			(<div>
				 <Welcome name={'Cards for ' + this.props.name} />
					<button onClick={this.handleToggle}>Cards</button>
					<Cards terms={data.terms} />
			</div>)
	}


	render() {	
		return this.setList()}
}

export default Terms;
