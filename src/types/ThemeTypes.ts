
import { getThemeFromLS } from '@utils/LocalStorage';


export interface ThemeState {
  theme: 'dark' | 'light';
}

export enum ThemeTypes {
  SET_DARK = 'SET_DARK',
  SET_LIGHT = 'SET_LIGHT',
}

export interface ThemeAction {
  type: string;
}

export const initialState: ThemeState = {
  theme: getThemeFromLS(),
};
