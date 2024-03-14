import React from 'react';

import Header from './Header';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getAuth } from 'firebase/auth';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

jest.mock('firebase/auth');

describe('Routing to pages', () => {
  let response;
  beforeEach(() => {
    response = {
      onAuthStateChanged: () => console.log('changed'),
      currentUser: {
        uid: 'testId',
      },
    };
  });

  test('Route to main page', async () => {
    (getAuth as jest.Mock).mockReturnValue(response);
    render(renderWithAll(<Header />));

    await act(async () => {
      userEvent.click(screen.getByTestId('main-link'));
    });

    await waitFor(() => expect(screen.getByTestId('main-link')).toBeInTheDocument());
  });

  test('Route to favorites page', async () => {
    (getAuth as jest.Mock).mockReturnValue(response);
    render(renderWithAll(<Header />));

    await act(async () => {
      userEvent.click(screen.getByTestId('favorites-link'));
    });

    await waitFor(() => expect(screen.getByTestId('favorites-page')).toBeInTheDocument());
  });
});
