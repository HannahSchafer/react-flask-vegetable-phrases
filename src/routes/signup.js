import React from 'react';
import { inject, observer } from 'mobx-react';

import { authFields } from '../config.js';
import { ACTIONS } from '../constants.js';
import AuthInput from '../components/auth/authInput.js';
import ErrorMessage from '../components/auth/errorMessage.js';

import '../global.css'


const SignUp = inject('store')(observer(({store}) => {

  store.authStore.userInfo.action = ACTIONS.signup;

	return (
    <div>
      <ErrorMessage />
    	<form onSubmit={store.authStore.handleSubmit} className='ui form'>
         { authFields.map((field, index) => (
            <div key={index}>
              <AuthInput field={field} />
            </div>
          ))
        }
        <div className='text-center'>
          <button className='ui button green'>Sign Up</button>
          <div>Already have an account?</div>
          <a href='/login'>Log In</a>
        </div>
    	</form>	
		</div>
	);
}
));


export default SignUp;