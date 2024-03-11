import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFetching } from '@hooks/useFetching';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { IBook } from '@projectTypes/IBooks';
import { mapData } from '@utils/DataMap';
import { getUniqData } from '@utils/UniqData';
import BookItems from '@components/BookItems/BookItems';
import BooksService from '@API/BooksAPI';
import LoadButton from '@UI/Button/LoadButton/LoadButton';
import Loader from '@UI/Loader/Loader';

import './../styles/common.css';

function MainPage() {
  const { theme } = useTypedSelector((state) => state.theme);
  const [books, setBooks] = useState<IBook[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [isFetchinfNewPage, setIsFetchingNewPage] = useState(false);

  const { search, category, sort, page } = useTypedSelector((state) => state.request);
  const dispatch = useDispatch();

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const response = await BooksService.getBooks(search, category, sort, page);
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
  }, [search, category, sort, page]);

  const onLoad = () => {
    dispatch({ type: 'ADD_PAGE' });
    setIsFetchingNewPage(true);
  };

  return (
    <div className={`page ${theme}`} data-testid='main-page'>
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
