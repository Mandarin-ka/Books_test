import React, { useState } from 'react';
import cl from './BookItem.module.css';
import { Link } from 'react-router-dom';
import { deleteItem, getItems, setItem } from '../../../utils/localStorage';

function BookItem({ book }: { book: any }) {
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
      <Link to={`bookPage/${book.id}`}>
        <div className={cl.book__item}>
          <div className={isFavorite ? cl.heart + ' ' + cl.active : cl.heart} onClick={addFavorite}></div>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
            alt={book.volumeInfo.title}
            className={cl.book__img}
          />
          <p className={cl.type}>{book.volumeInfo?.categories}</p>
          <h2 className={cl.title}>{book.volumeInfo?.title}</h2>
          <p className={cl.authors}>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      </Link>
    )
  );
}

export default BookItem;
