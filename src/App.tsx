import React, { useEffect, useState } from 'react';
import BooksService from './API/BooksAPI';
import { useFetching } from './hooks/useFetchind';
import Loader from './UI/Loader/Loader';

function App() {
  const [books, setBooks] = useState<any>([]);

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks();
    setBooks(response.data);
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  return <div className='App'>{isBooksLoading && <Loader />}</div>;
}

export default App;
