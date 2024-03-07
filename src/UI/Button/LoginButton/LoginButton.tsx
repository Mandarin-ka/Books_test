import React from 'react';

import styles from './LoginButton.module.css';

function LoginButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Войдите с помощью Google
    </button>
  );
}

export default LoginButton;
