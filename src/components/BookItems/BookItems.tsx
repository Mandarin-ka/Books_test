import React from 'react';

import { IBook } from '../../interfaces/IBooks';
import styles from './BookItems.module.css';
import BookItem from './BooksItem/BookItem';

function BookItems({ books }: { books: IBook[] }) {
  if (!books) return <h2>Книг не найдено :(</h2>;

  return (
    <div className={styles.book__items}>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookItems;
