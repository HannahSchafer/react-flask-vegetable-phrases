import { action, observable, decorate } from 'mobx';

import { ACTIONS, URLS } from '../constants.js';
import { authFields } from '../config.js';


class AuthStore {

  userInfo = {
    action: '',
    email: '',
    errors: [],
    name: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
  };

  response = null;
  errors = [];

  handleChange = (event) => {
    this.userInfo[event.target.name] = event.target.value;
  };

  handleSubmit = (event) => {
    if (this.userInfo.action === ACTIONS.signup) {
      this.validate();
    };

    if (!this.userInfo.errors.length) {
      this.authenticate();
    };
  };

  async authenticate() {
    const response = await fetch(URLS[this.userInfo.action], { 
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({data: this.userInfo})
    })
    .then(response => {
      // TODO: set auth tokens to local storage
      this.response = response.data;
    })
    .catch(error => {
      alert('An error occured while attempting to authenticate.')
    })
  };

  validate = () => {
    authFields.forEach((field) => {
      let userInput = this.userInfo[field.name];
      console.log('userInput111', userInput)

      if (field.parent) {
        let parentInput = this.userInfo[field.parent]
        if (!field.isValid(userInput, parentInput)) {
          this.userInfo.errors.push(field.errorMessage)
        }
      } else if (!field.isValid(userInput)) {
        this.userInfo.errors.push(field.errorMessage)
      }
    })
  };
}

decorate(AuthStore, {
  handleChange: action,
  handleSubmit: action,
  userInfo: observable,
  response: observable,
})

export default AuthStore;
