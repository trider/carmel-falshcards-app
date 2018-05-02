import React, {Component} from 'react';
import '../styles/App.css';

class Cards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			card: 0,
		};

		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleNext(event) {
		let card = this.state.card;
		if (card < 1)card++
		this.setState({card:card})
	}

	handlePrev(event) {
		let card = this.state.card;
		if (card>0) card--
		this.setState({card:card})
	}

	getTerms() {

		const term = this.props.terms[this.state.card]
		return (
			<div className="Term-container" key={term.id}>
				<p className="Term-title">{term.id}: {term.name}</p>
				<p className="Term-body">{term.description}</p>
			</div>
		)	
			
	
	}

	render() {
		return (
			<div>
				<button onClick={this.handlePrev}>Previous</button>
					<button onClick={this.handleNext}>Next</button>
				{this.getTerms()}
			</div>
		)
	}
}

export default Cards;
