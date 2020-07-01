import React from 'react';
import { inject, observer } from 'mobx-react';


const ErrorMessage = inject('store')(observer(({store}) => {
  return (
    <div>{ store.authStore.userInfo.errors.map(error => (
      <div>
        {error}
      </div>
    ))}
    </div>
  )
}));

export default ErrorMessage;