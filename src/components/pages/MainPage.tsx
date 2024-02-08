import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import Loader from '../UI/Loader/Loader';
import SearchInput from '../UI/SearchInput/SearchInput';
import BookItems from '../BookItems/BookItems';
import { IBooks } from '../../interfaces/IBooks';
import Dropdown from '../UI/DropDown/Dropdown';
import Header from '../Header/Header';

function MainPage() {
  const [books, setBooks] = useState<IBooks>({});
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(request, category, sort);
    setBooks(response.data);
  });

  useEffect(() => {
    fetchBooks();
  }, [request, category, sort]);

  return (
    <div className='App'>
      <Header category={category} sort={sort} setRequest={setRequest} setCategory={setCategory} setSort={setSort} />

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
