import { ThemeAction, ThemeState, ThemeTypes } from '@projectTypes/ThemeTypes';
import { getThemeFromLS } from '@utils/ThemeStorage';

export const initialState: ThemeState = {
  theme: getThemeFromLS(),
};

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
