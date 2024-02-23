import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';

import LoginButton from '../UI/Button/LoginButton/LoginButton';

function Login() {
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return <LoginButton click={login} />;
}

export default Login;
