import React from 'react';
import parse from 'html-react-parser';

import { useTypedSelector } from '@hooks/useTypedSelector';
import { Typography } from '@mui/material';
import { IBook } from '@projectTypes/IBooks';

import styles from './BookInfo.module.css';

function BookInfo({ book }: { book: IBook }) {
  const { theme } = useTypedSelector((state) => state.theme);
  if (!book) return <Typography variant='h5'>Книга не найдена...</Typography>;

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
        <Typography variant='subtitle1'>{book.volumeInfo.categories?.join(' / ')}</Typography>
        <Typography variant='h5' className={styles.title} sx={{ margin: '15px 0' }}>
          {book.volumeInfo?.title}
        </Typography>
        <Typography variant='subtitle2' className={styles.authors} sx={{ margin: '15px 0' }}>
          {book.volumeInfo?.authors.join(', ')}
        </Typography>
        {book.volumeInfo?.description && (
          <Typography variant='subtitle1' className={styles.description} sx={{ margin: '15px 0' }}>
            {parse(book.volumeInfo?.description)}
          </Typography>
        )}
      </div>
    </div>
  );
}

export default BookInfo;
