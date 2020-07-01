import React from 'react';
import ReactDOM from 'react-dom';
import MobileNavbar from '../../components/mobile-navbar/mobile-navbar.js';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<I18nextProvider i18n={i18n}><MobileNavbar /></I18nextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
