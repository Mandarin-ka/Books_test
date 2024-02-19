import React, { useContext } from 'react';

import { ThemeContext } from '../../Context/ThemeContext';
import styles from './LoadButton.module.css';

interface Props {
  click?: () => void;
  children?: React.ReactNode;
}

function LoadButton({ click, children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={styles.load + ' ' + styles[theme]} onClick={click}>
      {children}
    </button>
  );
}

export default LoadButton;
