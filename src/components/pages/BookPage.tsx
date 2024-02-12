import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import { IBook } from '../../interfaces/IBooks';
import Loader from '../UI/Loader/Loader';
import BookInfo from '../BookInfo/BookInfo';


function BookPage() {
  const bookId = useParams();
  const [book, setBook] = useState<IBook>();

  const [fetchBook, isBookLoading, BookError] = useFetching(async () => {
    const response = await BooksService.getBook(bookId.id);
    setBook(response.data);
  });

  useEffect(() => {
    fetchBook();
  }, [bookId]);

  return <div className='bookPage'>{isBookLoading ? <Loader /> : <BookInfo book={book} />}</div>;
}

export default BookPage;
