import React from 'react';
import cl from './BookItem.module.css';
import { Link } from 'react-router-dom';

function BookItem({ book }: { book: any }) {
  return (
    book && (
      <Link to={`bookPage/${book.id}`}>
        <div className={cl.book__item}>
          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail ||
              book.volumeInfo.imageLinks?.smallThumbnail ||
              'https://i.pinimg.com/564x/9f/ab/e5/9fabe5f90ca53f9a86306203f517f9fd.jpg'
            }
            alt={book.volumeInfo.title}
            className={cl.book__img}
          />
          <span className={cl.type}>{book.volumeInfo?.categories || 'Категория неизвестна'}</span>
          <h2 className={cl.title}>{book.volumeInfo?.title || 'Названия нет'}</h2>
          <span className={cl.authors}>{book.volumeInfo.authors?.join(', ') || 'Автор(ы) неизвестн(ы)'}</span>
        </div>
      </Link>
    )
  );
}

export default BookItem;
