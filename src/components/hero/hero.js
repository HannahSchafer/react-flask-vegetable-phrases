import React from 'react';
import MonkeyInfo from '../monkey-info/monkey-info.js';
import { CARDS } from '../../constants.js'

import './hero.css';


const Hero = () => {
  return (
    <div className="hero__container">
      <img src="/assets/image-testing.jpg" alt="Green Blocks" className="hero__img" />
      <section className="hero__content">
        <h2>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery</h2>
        <p className="text-muted hero__text">Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.</p>  
        <MonkeyInfo content={CARDS[0].monkeyInfo}/>
      </section>
    </div>  
  );
}

export default Hero;
