import React, { useContext } from 'react';
import cl from './LoadButton.module.css';
import { ThemeContext } from '../../Context/ThemeContext';

interface Props {
  click?: () => void;
  children?: React.ReactNode;
}

function LoadButton({ click, children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={cl.load + ' ' + cl[theme]} onClick={click}>
      {children}
    </button>
  );
}

export default LoadButton;
