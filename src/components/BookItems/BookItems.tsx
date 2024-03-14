import React, { memo } from 'react';

import BookItem from './BooksItem/BookItem';
import { IBook } from '@projectTypes/IBooks';

import styles from './BookItems.module.css';

function BookItems({ books }: { books: IBook[] }) {
  if (books.length)
    return (
      <div className={styles.book__items}>
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    );
}

export default memo(BookItems);
