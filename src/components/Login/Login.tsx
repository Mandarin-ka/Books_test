import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useCallback } from 'react';

import LoginButton from '../UI/Button/LoginButton/LoginButton';

function Login() {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const { user } = await signInWithPopup(getAuth(), provider);
    console.log(user);
  };

  return <LoginButton click={login} />;
}

export default Login;
