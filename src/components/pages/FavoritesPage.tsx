import React, { useContext, useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import { IBook } from '../../interfaces/IBooks';
import { getItems } from '../../utils/localStorage';
import BookItems from '../BookItems/BookItems';
import Loader from '../UI/Loader/Loader';
import { ThemeContext } from '../Context/ThemeContext';

function FavoritesPage() {
  const { theme } = useContext(ThemeContext);
  const [favorites, setFavorites] = useState<IBook[]>();
  const favoritesInLS = getItems();

  const [fetchBooks, isBooksLoading] = useFetching(async () => {
    const result = [];
    for (let i = 0; i < favoritesInLS.length; i++) {
      const temp = await BooksService.getBook(favoritesInLS[i]);
      result.push(temp.data);
    }

    setFavorites(result);
  });

  // Я не знаю, как сделать лучше.
  // API не предоставляет возможности к запросу по многим элементам сразу, а хранить в ls сразу объекты слишком дорого.
  // Работает СЛИШКОМ долго. (30 книг грузит около 15 секунд при хорошем интернете)

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={`page ${theme}`}>
      <h2 className='quantity'>Найдено книг: {favoritesInLS.length}</h2>
      {isBooksLoading ? <Loader /> : <BookItems books={favorites} />}
    </div>
  );
}

export default FavoritesPage;
