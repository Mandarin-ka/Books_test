import React from 'react';

import { LoadButtonProps } from './ILoadButton';

import styles from './LoadButton.module.css';

function LoadButton({ theme, onClick, children }: LoadButtonProps) {
  return (
    <button className={styles.load + ' ' + styles[theme]} onClick={onClick}>
      {children}
    </button>
  );
}

export default LoadButton;
