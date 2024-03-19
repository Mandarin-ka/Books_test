import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import MainRoutes from '@routes/MainRoutes';

export const renderWithRouter = (component: React.ReactNode, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      {component}
      <MainRoutes />
    </MemoryRouter>
  );
};
