import './../styles/common.css';

import React, { useContext, useEffect, useState } from 'react';

import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetching';
import { IBook } from '../../interfaces/IBooks';
import LoadButton from '../../UI/Button/LoadButton/LoadButton';
import Loader from '../../UI/Loader/Loader';
import { mapData } from '../../utils/DataMap';
import { getUniqData } from '../../utils/UniqData';
import BookItems from './../../components/BookItems/BookItems';
import { ThemeContext } from './../../context/ThemeContext';

interface Props {
  request: string;
  category: string;
  sort: string;
  page: number;
  setPage: (value: (value: number) => number) => void;
}

function MainPage({ request, category, sort, page, setPage }: Props) {
  const { theme } = useContext(ThemeContext);
  const [books, setBooks] = useState<IBook[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [isFetchinfNewPage, setIsFetchingNewPage] = useState(false);

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(request, category, sort, page);
    if (isFetchinfNewPage) {
      setBooks(getUniqData(mapData([...books, ...response.data.items])));
    } else {
      setBooks(getUniqData(mapData(response.data.items)));
    }
    setTotalBooks(response.data.totalItems);
    setIsFetchingNewPage(false);
  });

  useEffect(() => {
    fetchBooks();
  }, [request, category, sort, page]);

  const onLoad = () => {
    setPage((prevState: number) => prevState + 30);
    setIsFetchingNewPage(true);
  };

  return (
    <div className={`page ${theme}`}>
      {isBooksLoading && books.length < 1 ? (
        <Loader />
      ) : (
        <>
          <h2 className='quantity'>Найдено книг {totalBooks}</h2>
          <BookItems books={books} />
          {isFetchinfNewPage ? (
            <Loader />
          ) : (
            <LoadButton onClick={onLoad} theme={theme}>
              Load More
            </LoadButton>
          )}
        </>
      )}
    </div>
  );
}
export default MainPage;
