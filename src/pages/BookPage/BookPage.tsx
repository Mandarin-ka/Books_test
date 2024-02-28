import './../styles/common.css';

import BooksService from '@API/BooksAPI';
import BookInfo from '@components/BookInfo/BookInfo';
import { useFetching } from '@hooks/useFetching';
import { IBook } from '@projectTypes/IBooks';
import { useTypedSelector } from '@projectTypes/useTypedSelector';
import Loader from '@UI/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function BookPage() {
  const { theme } = useTypedSelector((state) => state.theme);
  const bookId = useParams();
  const [book, setBook] = useState<IBook>();

  const [fetchBook] = useFetching(async () => {
    const response = await BooksService.getBook(bookId.id);
    setBook(response.data);
  });

  useEffect(() => {
    fetchBook();
  }, [bookId]);

  return <div className={`page ${theme}`}>{!book ? <Loader /> : <BookInfo book={book} />}</div>;
}

export default BookPage;
