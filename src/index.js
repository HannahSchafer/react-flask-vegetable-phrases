import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import i18next from 'i18next';
import common_en from "./translations/en/common.json";
import common_jp from "./translations/jp/common.json";

import './index.css';


i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
	en: {
      common: common_en
	},
	jp: {
	  common: common_jp
    },
  }
});

ReactDOM.render(<I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById('root'));

serviceWorker.unregister();
