import React from 'react';
import { inject, observer } from 'mobx-react';

import { authFields } from '../config.js';
import { ACTIONS } from '../constants.js';
import AuthInput from '../components/auth/authInput.js';
import '../global.css'


const Login = inject('store')(observer(({store}) => {

  store.authStore.userInfo.action = ACTIONS.login;

	return (
    <div>
    	<form onSubmit={store.authStore.handleSubmit} className='ui form'>
        { authFields.map((field, index) => {
          if (field.actions.includes(ACTIONS.login)) {
            return (
              <div key={index}>
                <AuthInput field={field} />
              </div>
            )
          }
        })}
        <div className='text-center'>
          <button className='ui button green'>Log In</button>
          <div>Create an account</div>
          <a href='/signup'>Sign Up</a>
        </div>
      </form> 
    </div>
	);
}));

export default Login;