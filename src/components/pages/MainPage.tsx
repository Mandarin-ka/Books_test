import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import Loader from '../UI/Loader/Loader';
import SearchInput from '../UI/SearchInput/SearchInput';
import BookItems from '../BookItems/BookItems';
import { IBooks } from '../../interfaces/IBooks';

function MainPage() {
  const [books, setBooks] = useState<IBooks>({});
  const [request, setRequest] = useState('flower');

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(request);
    setBooks(response.data);
  });

  useEffect(() => {
    fetchBooks();
  }, [request]);

  return (
    <div className='App'>
      <SearchInput setRequest={setRequest} />
      {isBooksLoading ? (
        <Loader />
      ) : (
        <>
          <BookItems books={books.items} />
          <h2>Найдено книг {books.totalItems}</h2>
        </>
      )}
    </div>
  );
}

export default MainPage;
