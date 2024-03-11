import { getDoc } from 'firebase/firestore';
import React from 'react';
import { renderWithAll } from 'Tests/Helpers/MainHelper';

import { fireEvent, render, screen } from '@testing-library/react';

import BookItem from './BookItem';

jest.mock('firebase/firestore');

describe('', () => {
  let response: { exists: () => boolean };
  beforeEach(() => {
    response = {
      exists: () => false,
    };
  });

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

  test('Render book', async () => {
    (getDoc as jest.Mock).mockReturnValue(response);
    render(renderWithAll(<BookItem book={book} />));

    const item = screen.getByTestId('book-item');
    expect(item).toBeInTheDocument();
  });

  test('Add favorite', async () => {
    (getDoc as jest.Mock).mockReturnValue(response);
    render(renderWithAll(<BookItem book={book} />));

    expect(screen.getByTestId('add-favorite')).toBeInTheDocument();
    expect(screen.getByTestId('add-favorite').classList.contains('active')).toBe(false);
    fireEvent.click(screen.getByTestId('add-favorite'));
    expect(screen.getByTestId('add-favorite').classList.contains('active')).toBe(true);
  });

  test('Go to book page', async () => {
    (getDoc as jest.Mock).mockReturnValue(response);
    render(renderWithAll(<BookItem book={book} />));

    const item = screen.getByTestId('book-item');
    expect(screen.queryByTestId('book-page')).not.toBeInTheDocument();
    fireEvent.click(item);
    expect(screen.getByTestId('book-page')).toBeInTheDocument();
  });
});
