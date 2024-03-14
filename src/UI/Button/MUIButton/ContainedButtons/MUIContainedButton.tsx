import React from 'react';

import Button from '@mui/material/Button';

import styles from './MUIButton.module.css';

export default function ContainedButton({
  onClick,
  theme,
  children,
}: {
  onClick: () => void;
  theme?: 'dark' | 'light';
  children: React.ReactNode | string;
}) {
  return (
    <Button
      variant='contained'
      onClick={onClick}
      className={
        theme === 'dark' ? `${styles.button} ${styles.dark}` : `${styles.button} ${styles.light}`
      }
    >
      {children}
    </Button>
  );
}
