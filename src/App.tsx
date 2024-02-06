import React, { useEffect, useState } from 'react';
import BooksService from './API/BooksAPI';
import { useFetching } from './hooks/useFetchind';
import Loader from './UI/Loader/Loader';
import SearchInput from './UI/SearchInput/SearchInput';

function App() {
  const [books, setBooks] = useState<any>([]);
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
      {isBooksLoading && <Loader />} <SearchInput setRequest={setRequest} />
    </div>
  );
}

export default App;
