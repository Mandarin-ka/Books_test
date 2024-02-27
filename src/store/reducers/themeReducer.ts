import { initialState, ThemeAction, ThemeState, ThemeTypes } from '../../types/ThemeTypes';

export const themeReducer = (state = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeTypes.SET_DARK:
      return { theme: 'dark' };
    case ThemeTypes.SET_LIGHT:
      return { theme: 'light' };
    default:
      return state;
  }
};
