import React from 'react';
import Card from 'react-bootstrap/card';
import MonkeyInfo from '../monkey-info/monkey-info.js';

import './display-card.css';

const DisplayCard = (props) => {
  return (
    <div className="display-card__container">
      <Card>
        <img variant="top" src="/assets/image-CD.png" className="display-card__image" alt="Green CDs" />
        <Card.Body className="display-card__body">
          <Card.Text className="text-muted">{props.info.cardTitle}</Card.Text>
          <Card.Title>{props.info.cardText}</Card.Title> 
          <MonkeyInfo content={props.info.monkeyInfo} />
      </Card.Body>
      </Card>
    </div>
  );
}


export default DisplayCard;
