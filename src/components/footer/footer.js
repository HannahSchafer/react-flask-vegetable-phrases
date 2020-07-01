import React from 'react';
import LanguageSelector from '../../components/language-selector/language-selector.js';
import PolicyLinks from '../../components/policy-links/policy-links.js';

import '../../global.css';
import './footer.css';


const Footer = () => {
  return (
    <div className="footer__container">
      <section className="footer__left-section">
        <img 
          src="/assets/logo7.png" 
          alt="Organization Logo"
          className="logo-md"
        />
        <LanguageSelector />
      </section>
      <PolicyLinks />
    </div>  
  );
}


export default Footer;
