import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { renderWithStorage } from 'Tests/Helpers/StoreHelper';

import ThemeToggler from './ThemeToggler';

test('Change theme', () => {
  render(renderWithStorage(<ThemeToggler />));

  const toggler = screen.getByTestId('theme-toggler');

  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('dark');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
});
