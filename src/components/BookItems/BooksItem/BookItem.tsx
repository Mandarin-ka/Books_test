import React from 'react';
import cl from './BookItem.module.css';
import { Link } from 'react-router-dom';

function BookItem({ book }: { book: any }) {
  return (
    book && (
      <Link to={`bookPage/${book.id}`}>
        <div className={cl.book__item}>
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
