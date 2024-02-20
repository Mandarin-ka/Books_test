import React from 'react';

interface IContext {
  theme?: string | null;
  setTheme?: ((elem: 'dark' | 'light') => void) | null;
}

const context: IContext = { theme: null, setTheme: null };

export const ThemeContext = React.createContext(context);
