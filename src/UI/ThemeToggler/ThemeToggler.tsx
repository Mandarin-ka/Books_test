import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../types/useTypedSelector';
import { setThemeToLS } from '../../utils/ThemeStorage';
import styles from './ThemeToggler.module.css';

function ThemeToggler() {
  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.theme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setThemeToLS('dark');
      dispatch({ type: 'SET_DARK' });
    } else {
      setThemeToLS('light');
      dispatch({ type: 'SET_LIGHT' });
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={
        theme === 'dark' ? styles.toggler + ' ' + styles.dark : styles.toggler + ' ' + styles.light
      }
    >
      <div className={styles.helper}></div>
      <div className={styles.helper1}></div>
    </div>
  );
}

export default ThemeToggler;
