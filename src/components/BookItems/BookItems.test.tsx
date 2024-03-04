import { render, screen } from '@testing-library/react';
import React from 'react';

import BookItems from './BookItems';

test('BookItems component test', () => {
  render(<BookItems books={[]} />);
  const notFound = screen.getByTestId('not-found');
  expect(notFound).toBeInTheDocument();
});