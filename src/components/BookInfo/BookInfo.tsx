import React, { useContext } from 'react';
import { IBook } from '../../interfaces/IBooks';
import cl1 from './BookInfo.module.css';
import parse from 'html-react-parser';
import { ThemeContext } from '../Context/ThemeContext';

function BookInfo({ book }: { book: IBook }) {
  const { theme } = useContext(ThemeContext);
  if (!book) return <h2>Ууупс..:( Книга не найдена</h2>;

  return (
    <div className={cl1.book + ' ' + cl1[theme]}>
      <div className={cl1.img__wrapper}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
          alt=''
          className={cl1.book__img}
        />
      </div>
      <div className={cl1.info}>
        <span className={cl1.type}>{book.volumeInfo.categories?.join(' / ')}</span>
        <h2 className={cl1.title}>{book.volumeInfo?.title}</h2>
        <span className={cl1.authors}>{book.volumeInfo?.authors.join(', ')}</span>
        {book.volumeInfo?.description && <div className={cl1.description}>{parse(book.volumeInfo?.description)}</div>}
      </div>
    </div>
  );
}

export default BookInfo;
