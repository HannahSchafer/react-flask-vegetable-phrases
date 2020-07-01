import React from 'react';
import { CARDS } from '../../constants.js'
import DisplayCard from '../../components/display-card/display-card.js';

import './display-cards.css';


const DisplayCards = () => {
  return (
    <div className="display-card__container">
      {CARDS.map((cardInfo, idx) => (
        <DisplayCard info={cardInfo} key={idx} />
     ))}
    </div>   
  );
}

export default DisplayCards;