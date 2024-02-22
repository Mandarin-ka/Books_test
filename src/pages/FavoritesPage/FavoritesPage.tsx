import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

import BookItems from '../../components/BookItems/BookItems';
import { FirebaseContext } from '../../components/Context/FirebaseContext';
import { ThemeContext } from '../../components/Context/ThemeContext';
import { IBook } from '../../interfaces/IBooks';
import { getBooks } from '../../utils/Firebase';

function FavoritesPage() {
  const { theme } = useContext(ThemeContext);
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
