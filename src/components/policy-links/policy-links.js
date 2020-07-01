import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import './policy-links.css';

const PolicyLinks = () => {
  return (
    <div className="policy-links__container">
      <Router>
        <Link to="/terms-of-service/" tabIndex='6' className="policy-links__link text-muted">Terms of Service</Link>
        <span className="pipe">|</span>
        <Link to="/privacy-policy/" tabIndex='7' className="policy-links__link text-muted">Privacy Policy</Link>
        <span className="pipe">|</span>
        <Link to="/cookie-policy/" tabIndex='8' className="policy-links__link text-muted">Cookie Policy</Link>
        <span className="pipe">|</span>
        <Link to="/security/" tabIndex='9' className="policy-links__link text-muted">Security</Link>
        <span className="pipe">|</span>
        <Switch>
          <Route path="/terms-of-service" />
          <Route path="/privacy-policy" />
          <Route path="/cookie-policy" />
          <Route path="/security" />
        </Switch>
      </Router>
      <div>© 2019 Vegetable Internet Services, Inc., All Rights Reserved.</div>
    </div>
  );
} 

export default PolicyLinks;
