import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { IBook } from '../../../interfaces/IBooks';
import { deleteItem, getItems, setItem } from '../../../utils/localStorage';
import { ThemeContext } from '../../Context/ThemeContext';
import styles from './BookItem.module.css';

function BookItem({ book }: { book: IBook }) {
  const { theme } = useContext(ThemeContext);
  const [isFavorite, setIsFavorite] = useState(getItems().includes(book.id));

  const addFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (!isFavorite) {
      setItem(book.id);
    } else {
      deleteItem(book.id);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    book && (
      <Link to={`/bookPage/${book.id}`}>
        <div className={styles.book__item + ' ' + styles[theme]}>
          <div className={isFavorite ? styles.heart + ' ' + styles.active : styles.heart} onClick={addFavorite}></div>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
            alt={book.volumeInfo.title}
            className={styles.book__img}
          />
          <p className={styles.type + ' ' + styles[theme]}>{book.volumeInfo?.categories}</p>
          <h2 className={styles.title + ' ' + styles[theme]}>{book.volumeInfo?.title}</h2>
          <p className={styles.authors + ' ' + styles[theme]}>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      </Link>
    )
  );
}

export default BookItem;
