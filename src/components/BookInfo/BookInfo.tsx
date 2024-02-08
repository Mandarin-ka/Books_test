import React from 'react';
import { IBook } from '../../interfaces/IBooks';
import cl from './../BookItems/BooksItem/BookItem.module.css';
import cl1 from './BookInfo.module.css';
import parse from 'html-react-parser';

function BookInfo({ book }: { book: IBook }) {
  if (!book) return <div className='h2'>Ууупс..:( Книга не найдена</div>;

  return (
    <div className={cl1.book}>
      <div className={cl1.img__wrapper}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
          alt=''
          className={cl1.book__img}
        />
      </div>
      <div className={cl1.info}>
        <span className={cl1.type}>{book.volumeInfo.categories?.join(' / ')}</span>
        <h2 className={cl.title}>{book.volumeInfo?.title}</h2>
        <span className={cl.authors}>{book.volumeInfo?.title}</span>
        {book.volumeInfo?.description && <p className={cl1.description}>{parse(book.volumeInfo?.description)}</p>}
      </div>
    </div>
  );
}

export default BookInfo;
