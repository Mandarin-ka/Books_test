import parse from 'html-react-parser';
import React, { useContext } from 'react';

import { IBook } from '../../interfaces/IBooks';
import { ThemeContext } from '../Context/ThemeContext';
import styles from './BookInfo.module.css';

function BookInfo({ book }: { book: IBook }) {
  const { theme } = useContext(ThemeContext);
  if (!book) return <h2>Ууупс..:( Книга не найдена</h2>;

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
