import React from 'react';

import Button from '@mui/material/Button';

export default function TextButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) {
  return (
    <Button
      variant='text'
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        border: 0,
        backgroundColor: 'transparent',
        outline: 0,
        fontSize: '1.3rem',
        cursor: 'pointer',
        color: 'white',
      }}
    >
      {children}
    </Button>
  );
} //я так и не понял, как реализовать через css.. работает только в случае с обычной кнопкой, остальное просто слетает..
