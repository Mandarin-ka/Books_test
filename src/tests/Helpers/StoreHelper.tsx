import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@store/index';

export const renderWithStorage = (component: React.ReactNode, storeProp = store) => {
  return <Provider store={storeProp}>{component}</Provider>;
};
