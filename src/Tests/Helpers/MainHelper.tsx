import React from 'react';

import { renderWithContext } from './ContextHelper';
import { renderWithRouter } from './RouterHelper';
import { renderWithStorage } from './StoreHelper';

export const renderWithAll = (component: React.ReactNode) => {
  return renderWithStorage(renderWithContext(renderWithRouter(component)));
};
