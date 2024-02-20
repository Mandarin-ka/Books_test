import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';

import LoginButton from '../UI/Button/LoginButton/LoginButton';

function Login() {
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return <LoginButton click={login} />;
}

export default Login;
