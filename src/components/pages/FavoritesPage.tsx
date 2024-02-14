import React, { useEffect, useState } from 'react';
import BooksService from '../../API/BooksAPI';
import { useFetching } from '../../hooks/useFetchind';
import { IBook } from '../../interfaces/IBooks';
import { getItems } from '../../utils/localStorage';
import BookItems from '../BookItems/BookItems';
import Loader from '../UI/Loader/Loader';

function FavoritesPage() {
  const [favorites, setFavorites] = useState<IBook[]>();
  const favoritesInLS = getItems();

  const [fetchBooks, isBooksLoading, booksError] = useFetching(async () => {
    const result = [];
    for (let i = 0; i < favoritesInLS.length; i++) {
      const temp = await BooksService.getBook(favoritesInLS[i]);
      result.push(temp.data);
    }

    setFavorites(result);
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='favoritesPage'>
      <h2 className='quantity'>Найдено книг: {favoritesInLS.length}</h2>
      {isBooksLoading ? <Loader /> : <BookItems books={favorites} />}
    </div>
  );
}

export default FavoritesPage;
