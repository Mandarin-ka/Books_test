import React from 'react';

import Header from './Header';
import { render } from '@testing-library/react';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

describe('Routing to pages', () => {
  test('Route to main page', () => {
    render(renderWithAll(<Header />));
  });
});
