import React from 'react';

import styles from './LoadButton.module.css';

interface Props {
  theme?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

function LoadButton({ theme, onClick, children }: Props) {
  return (
    <button className={styles.load + ' ' + styles[theme]} onClick={onClick}>
      {children}
    </button>
  );
}

export default LoadButton;
