import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MobileNavbar from './components/mobile-navbar/mobile-navbar.js';
import Navbar from './components/navbar/navbar.js';
import { Provider, observer } from 'mobx-react';
import AuthStore from './stores/auth.js';
import SignUp from './routes/signup.js';
import Login from './routes/login.js';
import Phrase from './routes/phrase.js';
import Home from './routes/home.js';
import './App.css';


const stores = { 
  authStore: new AuthStore(),
}

class App extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>This is the Vegetables Landing Page</title>
          <meta name="description" content="Insert description content for Vegetables to increase accessibility and rank highly on SEO" />
        </Helmet>
        <Navbar />
        <MobileNavbar />
        <Provider store={stores}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <div className='ui container'>
                <div className='container-left'>
                  <Route path='/beetroots' component={Phrase} />
                  <Route path='/horseraddish' component={Phrase} />
                  <Route path='/sea-lettuce' component={Phrase} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/login' component={Login} />
                </div>
              </div>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default (observer(App));
