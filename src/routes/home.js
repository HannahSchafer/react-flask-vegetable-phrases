import React from 'react';
import { inject, observer } from 'mobx-react';
import DisplayCards from '../components/display-cards/display-cards.js';
import Footer from '../components/footer/footer.js';
import Hero from '../components/hero/hero.js';


const Home = inject('store')(observer(({store}) => {
	return (
    <div>
      <Hero />
      <div className="card-container">
        <DisplayCards />
      </div>
      <Footer />
	  </div>	
	);
}
));

export default (observer(Home));
