import { IBook } from '@projectTypes/IBooks';
import React, { memo } from 'react';

import styles from './BookItems.module.css';
import BookItem from './BooksItem/BookItem';

function BookItems({ books }: { books: IBook[] }) {
  if (!books.length)
    return (
      <h2 data-testid='not-found' className={styles['not-found']}>
        Книг не найдено :(
      </h2>
    );

  return (
    <div className={styles.book__items}>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default memo(BookItems);
