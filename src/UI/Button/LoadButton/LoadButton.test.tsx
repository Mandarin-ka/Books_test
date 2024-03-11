import React from 'react';

import { render, screen } from '@testing-library/react';

import LoadButton from './LoadButton';

describe('load button', () => {
  test('Render load button', () => {
    render(<LoadButton>Load more</LoadButton>);

    const button = screen.getByRole('button');
    expect(button.textContent).toEqual('Load more');
    button.textContent = 'test';
    expect(button.textContent).toEqual('test');
  });

  test('load button theme', () => {
    const theme = 'dark';
    render(<LoadButton theme={theme}>Load more</LoadButton>);
    const button = screen.getByRole('button');
    expect(button.classList.contains(theme)).toEqual(true);
  });
});
