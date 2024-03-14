import React from 'react';

import BookItems from './BookItems';
import { render, screen } from '@testing-library/react';

test('BookItems component test', () => {
  render(<BookItems books={[]} />);
  const notFound = screen.queryByTestId('book-item');
  expect(notFound).not.toBeInTheDocument();
});
