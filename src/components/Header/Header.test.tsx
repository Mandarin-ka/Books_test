import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

import Header from './Header';

describe('Header', () => {
  test('Routing', () => {
    render(renderWithAll(<Header />));

    const gotoMainPage = screen.getByText('Главная');
    userEvent.click(gotoMainPage);
  });
});
