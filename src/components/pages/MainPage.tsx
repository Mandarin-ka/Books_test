import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import Loader from '../UI/Loader/Loader';
import SearchInput from '../UI/SearchInput/SearchInput';
import BookItems from '../BookItems/BookItems';
import { IBooks } from '../../interfaces/IBooks';
import Dropdown from '../UI/DropDown/Dropdown';

function MainPage() {
  const [books, setBooks] = useState<IBooks>({});
  const [request, setRequest] = useState('flower');
  const [category, setCategory] = useState('all');

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(request, category);
    setBooks(response.data);
  });

  useEffect(() => {
    fetchBooks();
  }, [request, category]);

  return (
    <div className='App'>
      <SearchInput setRequest={setRequest} />
      <Dropdown
        options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
        category={category}
        setCategory={setCategory}
      />
      {isBooksLoading ? (
        <Loader />
      ) : (
        <>
          {books.totalItems && <h2>Найдено книг {books.totalItems}</h2>}
          <BookItems books={books.items} />
        </>
      )}
    </div>
  );
}

export default MainPage;
