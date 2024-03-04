import { store } from '@store/index';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';

import SearchInput from './SearchInput';

test('Inputing value', () => {
  render(
    <Provider store={store}>
      <SearchInput defaultAction={() => console.log(1)} />
    </Provider>
  );

  act(() => {
    expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
    userEvent.type(screen.getByTestId('search'), 'something');
    expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('something');
  });
});
