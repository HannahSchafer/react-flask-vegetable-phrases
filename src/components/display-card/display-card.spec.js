import React from 'react';
import ReactDOM from 'react-dom';
import DisplayCard from '../../components/display-card/display-card.js';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { CARDS } from '../../constants.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<I18nextProvider i18n={i18n}><DisplayCard info={CARDS[0]} /></I18nextProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
