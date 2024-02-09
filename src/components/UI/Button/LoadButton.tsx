import React from 'react';
import cl from './LoadButton.module.css';

interface Props {
  click?: () => void;
  children?: React.ReactNode;
}

function LoadButton({ click, children }: Props) {
  return (
    <button className={cl.load} onClick={click}>
      {children}
    </button>
  );
}

export default LoadButton;
