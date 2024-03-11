import React from 'react';

import { render, screen } from '@testing-library/react';

import Loader from './Loader';

test('Render loader', () => {
  render(<Loader />);

  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});
