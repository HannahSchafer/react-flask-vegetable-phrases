import React, { Component } from 'react';

import './monkey-info.css';


class MonkeyInfo extends Component {

  render() {
	  if (!this.props.content) {
		  return null;
	  }

	  const { firstName, lastName,  title, role, company } = this.props.content;
    
    return (
      <div className="monkeyInfo__container">
      <div className="monkeyInfo__circle">
        <img className="monkeyInfo__avatar" src="/assets/speak-no-evil-monkey.png" alt="Speak No Evil Monkey" />
      </div>
        <div>
          <div className="monkeyInfo__header">{firstName} {lastName}</div>
          <div className="monkeyInfo__subheader">{title}/{role}/{company}</div>
        </div>
      </div>
    );
  } 
}


export default MonkeyInfo;
