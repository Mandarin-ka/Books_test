import React from 'react';

import Loader from './Loader';
import { render, screen } from '@testing-library/react';

test('Render loader', () => {
  render(<Loader />);

  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});
