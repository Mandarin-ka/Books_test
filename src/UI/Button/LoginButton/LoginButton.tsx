import React from 'react';

import styles from './LoginButton.module.css';

function LoginButton({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.button__block}>
      <button className={styles.button} onClick={onClick}>
        Войдите с помощью Google
      </button>
    </div>
  );
}

export default LoginButton;
