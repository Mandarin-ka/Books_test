import React from 'react';

import BookItem from './BookItem';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithAll } from '@tests/Helpers/MainHelper';
import { getDoc } from 'firebase/firestore';

jest.mock('firebase/firestore');

describe('', () => {
  let response;
  beforeEach(
    () =>
      (response = {
        exists: () => {
          return false;
        },
        data: { name: 'name' },
      })
  );

  const book = {
    id: 'testId',
    volumeInfo: {
      title: 'Sherlock',
      authors: ['Artur Conan Doyle'],
      publisher: 'England',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam incidunt voluptatem velit consequuntur error repellat nesciunt placeat perferendis numquam odit debitis, eaque odio! Sint ab excepturi repellat quasi doloribus.',
      categories: ['detective'],
      imageLinks: { smallThumbnail: 'url1.jpg', thumbnail: 'url2.png' },
    },
  };

  test('Render book', () => {
    (getDoc as jest.Mock).mockResolvedValue(Promise.resolve(response));
    render(renderWithAll(<BookItem book={book} />));

    const item = screen.getByTestId('book-item');
    expect(item).toBeInTheDocument();
  });

  test('Add favorite', async () => {
    (getDoc as jest.Mock).mockResolvedValue(Promise.resolve(response));

    await act(async () => render(renderWithAll(<BookItem book={book} />)));

    expect(screen.getByTestId('add-favorite')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite').classList.contains('active')).toBe(false);

    await act(async () => {
      userEvent.click(screen.getByTestId('add-favorite'));
    });

    expect(screen.getByTestId('add-favorite').classList.contains('active')).toBe(true);

    await act(async () => {
      userEvent.click(screen.getByTestId('add-favorite'));
    });

    expect(screen.getByTestId('add-favorite').classList.contains('active')).toBe(false);
    expect(getDoc).toBeCalledTimes(1);
  });

  test('Go to book page', async () => {
    (getDoc as jest.Mock).mockResolvedValue(Promise.resolve(response));
    render(renderWithAll(<BookItem book={book} />));

    const item = screen.getByTestId('book-item');
    expect(screen.queryByTestId('book-page')).not.toBeInTheDocument();

    await act(async () => {
      userEvent.click(item);
    });
    expect(screen.getByTestId('book-page')).toBeInTheDocument();
  });
});
