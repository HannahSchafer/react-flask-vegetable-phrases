import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PhraseForm from '../components/phrase-form/phraseForm.js';


class Phrase extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pairCount: null,
			phraseContent: '',
			phrases: [],
			response: null,
			errors: [],
		}
	}

	componentDidMount = () => {
		this.getPhrases();
	};

	getPhrases = () => {
    fetch('/phrases').then(res => res.json()).then(data => {
      this.setState({
      	phrases: data.phrases
      })
    })
  };

	async processPhrase(phrase) {
		const response = await fetch('/process', { 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({text: phrase})
    })
    .then(res => res.json())
    .then(json => this.setState({ pairCount: json.pairs }))
    .catch(error => {
    	this.setState({
    		errors: [error, ...this.state.errors]
    	})
    })
	};

	async addPhrase() {
		const response = await fetch('/phrase', { 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({content: this.state.phraseContent})
    })
    .then(response => {
      this.state.response = response.data;
    })
    .catch(error => {
    	this.setState({
    		errors: [error, ...this.state.errors]
    	})
    })
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div>
      	<PhraseForm
      		handleChange={this.handleChange}
      		phraseContent={this.state.phraseContent}
      		addPhrase={() => this.addPhrase()}
      	/>
     		<div style={{display: 'flex'}}>
	     		{ this.state.phrases.length &&
	     			<div style={{width: '80%'}}>
	     				<h3>Click Your Vegetable Phrases...</h3>
	     				{this.state.phrases.map((phrase, idx) => 
	     					<li
	     						key={idx}
	     						onClick={() => this.processPhrase(phrase)}>
	     						{phrase}
	     					</li>
	     				)}
	     			</div>
	     		}
	     		<div style={{width: '30%'}}>
		     		{this.state.pairCount && 
		     			<div>
		     			{Object.entries(this.state.pairCount).map((pair, idx) => 
		     				<div key={idx}>
		     					{pair}
		     				</div>
		     			)}
		     			</div>
		     		}
	     		</div>
     		</div>
	  </div>	
		);
	}
};

export default inject('store')(observer(Phrase))
