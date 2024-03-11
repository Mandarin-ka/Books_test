import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FirebaseContext } from '@context/FirebaseContext';
import { useTypedSelector } from '@hooks/useTypedSelector';
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

      setIsFavorite(data);
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
          <p className={styles.type + ' ' + styles[theme]}>{book.volumeInfo?.categories}</p>
          <h2 className={styles.title + ' ' + styles[theme]}>{book.volumeInfo?.title}</h2>
          <p className={styles.authors + ' ' + styles[theme]}>
            {book.volumeInfo?.authors?.join(', ')}
          </p>
        </div>
      </Link>
    )
  );
}

export default BookItem;
