import React from 'react';

import LoginButton from '../UI/Button/LoginButton/LoginButton';

function Login({ login }: { login: () => void }) {
  return <LoginButton click={login} />;
}

export default Login;
