import React from 'react';
import { renderWithStorage } from 'Tests/Helpers/StoreHelper';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchInput from './SearchInput';

describe('text field check', () => {
  test('Inputing value', () => {
    render(renderWithStorage(<SearchInput defaultAction={() => console.log(1)} />));

    act(() => {
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('');
      userEvent.type(screen.getByTestId('search'), 'something');
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('something');
      userEvent.type(screen.getByTestId('search'), 'sherlock');
      expect((screen.getByTestId('search') as HTMLInputElement).value).toEqual('somethingsherlock');
    });
  });

  test('clear value', () => {
    render(renderWithStorage(<SearchInput defaultAction={() => console.log(1)} />));

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
