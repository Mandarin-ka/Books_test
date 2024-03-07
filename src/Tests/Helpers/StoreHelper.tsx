import { store } from '@store/index';
import React from 'react';
import { Provider } from 'react-redux';

export const renderWithStorage = (component: React.ReactNode, storeProp = store) => {
  return <Provider store={storeProp}>{component}</Provider>;
};
