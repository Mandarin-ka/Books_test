import React from 'react';
import parse from 'html-react-parser';

import { useTypedSelector } from '@hooks/useTypedSelector';
import { IBook } from '@projectTypes/IBooks';

import styles from './BookInfo.module.css';

function BookInfo({ book }: { book: IBook }) {
  const { theme } = useTypedSelector((state) => state.theme);
  if (!book) return <p>Книга не найдена...</p>;

  return (
    <div className={styles.book + ' ' + styles[theme]}>
      <div className={styles.img__wrapper}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
          alt=''
          className={styles.book__img}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.type}>{book.volumeInfo.categories?.join(' / ')}</span>
        <h2 className={styles.title}>{book.volumeInfo?.title}</h2>
        <span className={styles.authors}>{book.volumeInfo?.authors.join(', ')}</span>
        {book.volumeInfo?.description && (
          <div className={styles.description}>{parse(book.volumeInfo?.description)}</div>
        )}
      </div>
    </div>
  );
}

export default BookInfo;
