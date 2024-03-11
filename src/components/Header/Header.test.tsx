import { getAuth } from 'firebase/auth';
import React from 'react';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

jest.mock('firebase/auth');

describe('Header', () => {
  let auth;
  beforeEach(() => {
    auth = {
      uid: 'testUid',
      onAuthStateChanged: (callback: () => void) => callback(),
    };
  });

  test('Routing', () => {
    render(renderWithAll(<Header />));

    (getAuth as jest.Mock).mockReturnValue(auth);
    const gotoMainPage = screen.getByText('Главная');
    userEvent.click(gotoMainPage);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();

    screen.debug();
  });
});
