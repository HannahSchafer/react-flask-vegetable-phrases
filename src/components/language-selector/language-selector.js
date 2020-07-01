import React, { Component } from 'react';
import { translate } from "react-i18next";
import { LANGUAGES } from '../../constants.js'


class LanguageSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {dropdownBtn: LANGUAGES['en']}
  }

  render() {

    const { i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      this.setState({dropdownBtn: LANGUAGES[lng]})
    };

    return (
      <div className="dropdown">
        <button tabIndex='5' className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {this.state.dropdownBtn}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div aria-label="Change Language to English" className="dropdown-item" onClick={() => changeLanguage('en')}>English (US)</div>
          <div aria-label="Change Language to Japanese" className="dropdown-item" onClick={() => changeLanguage('jp')}>日本語</div>
        </div>
      </div>
    );
  } 
}


export default translate('common')(LanguageSelector);
