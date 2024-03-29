import React from 'react';

import ThemeToggler from './ThemeToggler';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithStorage } from '@tests/Helpers/StoreHelper';

test('Change theme', () => {
  render(renderWithStorage(<ThemeToggler />));

  const toggler = screen.getByTestId('theme-toggler');

  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('dark');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
});
