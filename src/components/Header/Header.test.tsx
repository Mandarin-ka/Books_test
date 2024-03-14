import React from 'react';

import Header from './Header';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

describe('Routing to pages', () => {
  test('Route to main page', async () => {
    render(renderWithAll(<Header />));

    await act(async () => {
      userEvent.click(screen.getByTestId('main-link'));
    });

    await waitFor(() => expect(screen.getByTestId('main-link')).toBeInTheDocument());
  });

  test('Route to favorites page', async () => {
    render(renderWithAll(<Header />));

    await act(async () => {
      userEvent.click(screen.getByTestId('favorites-link'));
    });

    await waitFor(() => expect(screen.getByTestId('main-page')).toBeInTheDocument());
  });
});
