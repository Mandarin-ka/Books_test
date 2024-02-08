import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import Loader from '../UI/Loader/Loader';
import BookItems from '../BookItems/BookItems';
import { IBooks } from '../../interfaces/IBooks';
import './MainPage.css';

interface Props {
  request: string;
  category: string;
  sort: string;
}

function MainPage({ request, category, sort }: Props) {
  const [books, setBooks] = useState<IBooks>({});

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(request, category, sort);
    setBooks(response.data);
  });

  useEffect(() => {
    fetchBooks();
  }, [request, category, sort]);

  return (
    <div className='App'>
      {isBooksLoading ? (
        <Loader />
      ) : (
        <>
          {books.totalItems && <h2 className='quantity'>Найдено книг {books.totalItems}</h2>}
          <BookItems books={books.items} />
        </>
      )}
    </div>
  );
}

export default MainPage;
