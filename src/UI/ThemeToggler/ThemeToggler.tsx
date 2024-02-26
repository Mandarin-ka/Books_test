import React from 'react';

import styles from './ThemeToggler.module.css';

function ThemeToggler({ theme, setTheme }: { theme: string; setTheme: (elem: string) => void }) {
  const onClick = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <div
      onClick={onClick}
      className={theme === 'dark' ? styles.toggler + ' ' + styles.dark : styles.toggler + ' ' + styles.light}>
      <div className={styles.helper}></div>
      <div className={styles.helper1}></div>
    </div>
  );
}

export default ThemeToggler;
