import { render, screen } from '@testing-library/react';
import React from 'react';

import LoginButton from './LoginButton';

test('Render Login Button', () => {
  render(<LoginButton onClick={() => console.log(1)} />);

  const loginButton = screen.getByText('Войдите с помощью Google');
  expect(loginButton).toBeInTheDocument();
});
