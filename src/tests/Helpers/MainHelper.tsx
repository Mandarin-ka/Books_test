import React from 'react';

import { renderWithContext } from '@tests/Helpers/ContextHelper';
import { renderWithRouter } from '@tests/Helpers/RouterHelper';
import { renderWithStorage } from '@tests/Helpers/StoreHelper';

export const renderWithAll = (component: React.ReactNode) => {
  return renderWithStorage(renderWithContext(renderWithRouter(component)));
};
