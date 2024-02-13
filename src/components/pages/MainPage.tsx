import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import Loader from '../UI/Loader/Loader';
import BookItems from '../BookItems/BookItems';
import { IBook } from '../../interfaces/IBooks';
import './MainPage.css';
import LoadButton from '../UI/Button/LoadButton';
import { getUniqData } from '../../utils/UniqData';

interface Props {
  request: string;
  category: string;
  sort: string;
  page: number;
  setPage: (el: number) => void;
}

function MainPage({ request, category, sort, page, setPage }: Props) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [isFetchinfNewPage, setIsFetchingNewPage] = useState(false);

  const [fetchBooks, isBooksLoading, booksError] = useFetching(async () => {
    const response = await BooksService.getBooks(request, category, sort, page);
    if (isFetchinfNewPage) {
      setBooks(getUniqData([...books, ...response.data.items]));
    } else {
      setBooks(getUniqData(response.data.items));
      setTotalBooks(response.data.totalItems);
    }
    setIsFetchingNewPage(false);
  });

  useEffect(() => {
    fetchBooks();
  }, [request, category, sort, page]);

  function load() {
    setPage(page + 30);
    setIsFetchingNewPage(true);
  }

  return (
    <div className='App'>
      {isBooksLoading && books.length < 1 ? (
        <Loader />
      ) : (
        <>
          {<h2 className='quantity'>Найдено книг {totalBooks}</h2>}
          <BookItems books={books} />
          {isFetchinfNewPage ? <Loader /> : <LoadButton click={load}>Load More</LoadButton>}
        </>
      )}
    </div>
  );
}
export default MainPage;
