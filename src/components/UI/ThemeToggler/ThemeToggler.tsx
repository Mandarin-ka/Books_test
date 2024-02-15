import React, { useContext } from 'react';
import cl from './ThemeToggler.module.css';
import { ThemeContext } from '../../Context/ThemeContext';

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  const click = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <div onClick={click} className={theme === 'dark' ? cl.toggler + ' ' + cl.dark : cl.toggler + ' ' + cl.light}>
      <div className={cl.helper}></div>
      <div className={cl.helper1}></div>
    </div>
  );
}

export default ThemeToggler;
