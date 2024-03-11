import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useFetching } from '@hooks/useFetching';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { IBook } from '@projectTypes/IBooks';
import BookInfo from '@components/BookInfo/BookInfo';
import BooksService from '@API/BooksAPI';
import Loader from '@UI/Loader/Loader';

import './../styles/common.css';

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

  return (
    <div className={`page ${theme}`} data-testid='book-page'>
      {!book ? <Loader /> : <BookInfo book={book} />}
    </div>
  );
}

export default BookPage;
