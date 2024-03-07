import MainRoutes from '@routes/MainRoutes';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: React.ReactNode, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      {component}
      <MainRoutes />
    </MemoryRouter>
  );
};
