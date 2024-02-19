import React, { useContext } from 'react';

import { ThemeContext } from '../../Context/ThemeContext';
import styles from './ThemeToggler.module.css';

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  const click = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <div
      onClick={click}
      className={theme === 'dark' ? styles.toggler + ' ' + styles.dark : styles.toggler + ' ' + styles.light}
    >
      <div className={styles.helper}></div>
      <div className={styles.helper1}></div>
    </div>
  );
}

export default ThemeToggler;
