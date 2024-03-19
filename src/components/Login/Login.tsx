import React, { useCallback } from 'react';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import LoginButton from '@UI/Button/LoginButton/LoginButton';

function Login() {
  const login = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider);
    } catch (e) {
      console.error((e as Error).message);
    }
  }, []);

  return <LoginButton onClick={login} />;
}

export default Login;
