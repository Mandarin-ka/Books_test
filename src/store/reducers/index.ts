import { combineReducers } from 'redux';

import { requestReducer } from './requestReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  request: requestReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
