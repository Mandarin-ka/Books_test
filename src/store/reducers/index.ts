import { combineReducers } from 'redux';

import { pageReducer } from './pageReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  page: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
