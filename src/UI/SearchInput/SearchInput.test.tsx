import { store } from '@store/index';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';

import SearchInput from './SearchInput';

describe('text field check', () => {
  test('Inputing value', () => {
    render(
      <Provider store={store}>
        <SearchInput defaultAction={() => console.log()} />
      </Provider>
    );

    act(() => {
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
      userEvent.type(screen.getByTestId('search'), 'something');
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('something');
      userEvent.type(screen.getByTestId('search'), 'sherlock');
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('somethingsherlock');
    });
  });

  test('clear value', () => {
    render(
      <Provider store={store}>
        <SearchInput defaultAction={() => console.log()} />
      </Provider>
    );

    act(() => {
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
      userEvent.type(screen.getByTestId('search'), 'test');
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('test');
      userEvent.clear(screen.getByTestId('search'));
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
      expect((screen.getByTestId('search') as HTMLInputElement).value).not.toEqual('test');
    });
  });
});
