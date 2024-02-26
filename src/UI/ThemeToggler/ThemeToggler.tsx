import React from 'react';

import styles from './ThemeToggler.module.css';

function ThemeToggler({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <div
      onClick={toggleTheme}
      className={theme === 'dark' ? styles.toggler + ' ' + styles.dark : styles.toggler + ' ' + styles.light}>
      <div className={styles.helper}></div>
      <div className={styles.helper1}></div>
    </div>
  );
}

export default ThemeToggler;
