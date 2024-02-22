import React from 'react';

import styles from './LoginButton.module.css';

function LoginButton({ click }: { click: () => void }) {
  return (
    <div className={styles.button__block}>
      <button className={styles.button} onClick={click}>
        Войдите с помощью Google
      </button>
    </div>
  );
}

export default LoginButton;
