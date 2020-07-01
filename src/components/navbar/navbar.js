import React from 'react';
import Button from 'react-bootstrap/button';
import { translate } from "react-i18next";

import '../../global.css';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar__container">
      <a href='/'>
        <img
          src="/assets/logo7.png"
          alt="Organization Logo"
          className="logo-md"
        />
      </a>
      <div className="navbar__links">
        <a href='/beetroots' tabIndex='1'>Beetroots</a>
        <a href='/horseraddish' tabIndex='2'>Horseraddish</a>
        <a href='/sea-lettuce' tabIndex='3'>Sea lettuce</a>
        <a href='/signup' tabIndex='4'>
          <Button variant="success">
            { props.t('startBuilding', { framework: "react-i18next" }) }
          </Button>
        </a>
      </div>
    </div>
  );
}

export default translate('common')(Navbar);
