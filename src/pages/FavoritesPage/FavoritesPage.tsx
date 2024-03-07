import BookItems from '@components/BookItems/BookItems';
import { FirebaseContext } from '@context/FirebaseContext';
import { IBook } from '@projectTypes/IBooks';
import { useTypedSelector } from '@projectTypes/useTypedSelector';
import { getBooks } from '@utils/Firebase';
import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

function FavoritesPage() {
  const { theme } = useTypedSelector((state) => state.theme);
  const { app, db } = useContext(FirebaseContext);
  const [favorites, setFavorites] = useState<IBook[]>([]);
  const user = getAuth(app).currentUser.uid;

  useEffect(() => {
    getBooks(db, user, setFavorites);
  }, []);

  return (
    <div className={`page ${theme}`}>
      <h2 className='quantity'>Найдено книг: {favorites.length}</h2>
      <BookItems books={favorites} />
    </div>
  );
}

export default FavoritesPage;
