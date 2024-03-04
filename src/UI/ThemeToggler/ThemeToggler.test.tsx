import { store } from '@store/index';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import ThemeToggler from './ThemeToggler';

test('Change theme', () => {
  render(
    <Provider store={store}>
      <ThemeToggler />
    </Provider>
  );

  const toggler = screen.getByTestId('theme-toggler');

  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('dark');
  fireEvent.click(toggler);
  expect(screen.getByTestId('theme-toggler')).toHaveClass('light');
});
