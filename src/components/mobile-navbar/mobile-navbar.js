import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { translate } from "react-i18next";

import './mobile-navbar.css';


class MobileNavbar extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    const { t } = this.props;

    return (
      <div className="mobile-nav__container">
        <Router>
          <MDBContainer>
            <MDBNavbar light className="mobile-nav__mdbnavbar">
              <MDBContainer>
                <MDBNavbarBrand>
                  <a href='/'>
                    <img
                      src="/assets/logo7.png"
                      alt="Vegetables Logo"
                      className="logo-sm"
                    />
                  </a>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse1')}
                />
                <MDBCollapse
                  id='navbarCollapse1'
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <a href='/beetroots' tabIndex='1'>Beetroots</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href='/horseraddish' tabIndex='2'>Horseraddish</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href='/sea-lettuce' tabIndex='3'>Sea lettuce</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href='/signup' tabIndex='4'>
                        { t('startBuilding', { framework: "react-i18next" }) }
                      </a>
                    </MDBNavItem>
                    <Switch>
                      <Route path='/beetroots' />
                      <Route path='/horseraddish' />
                      <Route path='/sea-lettuce' />
                      <Route path='/start-building' />
                    </Switch>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </MDBContainer>
        </Router>
      </div>
    );
  }
}

export default translate('common')(MobileNavbar);
