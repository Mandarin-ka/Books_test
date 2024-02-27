import './../styles/common.css';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetching';
import { IBook } from '../../interfaces/IBooks';
import { useTypedSelector } from '../../types/useTypedSelector';
import LoadButton from '../../UI/Button/LoadButton/LoadButton';
import Loader from '../../UI/Loader/Loader';
import { mapData } from '../../utils/DataMap';
import { getUniqData } from '../../utils/UniqData';
import BookItems from './../../components/BookItems/BookItems';

interface Props {
  request: string;
  category: string;
  sort: string;
}

function MainPage({ request, category, sort }: Props) {
  const { theme } = useTypedSelector((state) => state.theme);
  const [books, setBooks] = useState<IBook[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [isFetchinfNewPage, setIsFetchingNewPage] = useState(false);

  const { page } = useTypedSelector((state) => state.page);
  const dispatch = useDispatch();

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
    dispatch({ type: 'ADD_PAGE', payload: 30 });
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
