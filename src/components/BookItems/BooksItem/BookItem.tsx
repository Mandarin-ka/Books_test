import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import { FirebaseContext } from '@context/FirebaseContext';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { Typography } from '@mui/material';
import { IBook } from '@projectTypes/IBooks';
import { addToDB, deleteFromBD, hasBook } from '@utils/Firebase';

import styles from './BookItem.module.css';

function BookItem({ book }: { book: IBook }) {
  const { theme } = useTypedSelector((state) => state.theme);
  const { app, db } = useContext(FirebaseContext);
  const user = getAuth(app).currentUser?.uid;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await hasBook(db, user, book);

      setIsFavorite(data || false);
    };

    getData();
  }, []);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    isFavorite ? deleteFromBD(db, user, book) : addToDB(db, user, book);
    setIsFavorite((prevValue) => !prevValue);
  };

  return (
    book && (
      <Link to={`/bookPage/${book.id}`} data-testid='book-item'>
        <div className={styles.book__item + ' ' + styles[theme]}>
          <button
            className={isFavorite ? styles.heart + ' ' + styles.active : styles.heart}
            onClick={toggleFavorite}
            data-testid='add-favorite'
          />
          <img
            src={
              book.volumeInfo?.imageLinks?.thumbnail || book.volumeInfo?.imageLinks?.smallThumbnail
            }
            alt={book.volumeInfo?.title}
            className={styles.book__img}
          />
          <Typography
            variant='subtitle2'
            className={styles.type + ' ' + styles[theme]}
            sx={{ margin: '5px 0' }}
          >
            {book.volumeInfo?.categories}
          </Typography>
          <Typography
            variant='h6'
            className={styles.title + ' ' + styles[theme]}
            sx={{ margin: '5px 0' }}
          >
            {book.volumeInfo?.title}
          </Typography>
          <Typography
            variant='subtitle1'
            className={styles.authors + ' ' + styles[theme]}
            sx={{ margin: '5px 0' }}
          >
            {book.volumeInfo?.authors?.join(', ')}
          </Typography>
        </div>
      </Link>
    )
  );
}

export default BookItem;
