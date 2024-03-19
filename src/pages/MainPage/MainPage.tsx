import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import BooksService from '@API/BooksAPI';
import BookItems from '@components/BookItems/BookItems';
import { useFetching } from '@hooks/useFetching';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { Typography } from '@mui/material';
import { IBook } from '@projectTypes/IBooks';
import ContainedButton from '@UI/Button/MUIButton/ContainedButtons/MUIContainedButton';
import Loader from '@UI/Loader/Loader';
import { mapData } from '@utils/DataMap';
import { getUniqData } from '@utils/UniqData';

import '@pages/styles/common.css';

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
          <Typography variant='h5' sx={{ marginBottom: '30px' }} align='center'>
            Найдено книг {totalBooks}
          </Typography>
          <BookItems books={books} />
          {isFetchinfNewPage ? (
            <Loader />
          ) : (
            <ContainedButton onClick={onLoad} theme={theme}>
              Load More
            </ContainedButton>
          )}
        </>
      )}
    </div>
  );
}
export default MainPage;
