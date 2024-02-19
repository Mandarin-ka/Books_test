import './../styles/common.css';

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import BooksService from '../../API/BooksAPI';
import BookInfo from '../../components/BookInfo/BookInfo';
import { ThemeContext } from '../../components/Context/ThemeContext';
import Loader from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetchind';
import { IBook } from '../../interfaces/IBooks';

function BookPage() {
  const { theme } = useContext(ThemeContext);
  const bookId = useParams();
  const [book, setBook] = useState<IBook>();

  const [fetchBook, isBookLoading] = useFetching(async () => {
    const response = await BooksService.getBook(bookId.id);
    setBook(response.data);
  });

  useEffect(() => {
    fetchBook();
  }, [bookId]);

  return <div className={`page ${theme}`}>{isBookLoading && book ? <Loader /> : <BookInfo book={book} />}</div>;
}

export default BookPage;
