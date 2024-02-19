import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { deleteItem, getItems, setItem } from '../../../utils/localStorage';
import { ThemeContext } from '../../Context/ThemeContext';
import cl from './BookItem.module.css';

function BookItem({ book }: { book: any }) {
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
        <div className={cl.book__item + ' ' + cl[theme]}>
          <div className={isFavorite ? cl.heart + ' ' + cl.active : cl.heart} onClick={addFavorite}></div>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
            alt={book.volumeInfo.title}
            className={cl.book__img}
          />
          <p className={cl.type + ' ' + cl[theme]}>{book.volumeInfo?.categories}</p>
          <h2 className={cl.title + ' ' + cl[theme]}>{book.volumeInfo?.title}</h2>
          <p className={cl.authors + ' ' + cl[theme]}>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      </Link>
    )
  );
}

export default BookItem;
