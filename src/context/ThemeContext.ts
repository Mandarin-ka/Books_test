import React from 'react';

import { IContext } from './IThemeContext';

const context: IContext = { theme: null, setTheme: null };

export const ThemeContext = React.createContext(context);
