import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';

import BookItems from '../../components/BookItems/BookItems';
import { FirebaseContext } from '../../components/Context/FirebaseContext';
import { ThemeContext } from '../../components/Context/ThemeContext';
import { IBook } from '../../interfaces/IBooks';

function FavoritesPage() {
  const { theme } = useContext(ThemeContext);
  const { app, db } = useContext(FirebaseContext);
  const [favorites, setFavorites] = useState<IBook[]>([]);

  const getUser = () => {
    return getAuth(app).currentUser.uid;
  };

  const colRef = collection(db, getUser());

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await getDocs(colRef);
        setFavorites(data.docs.map((doc) => ({ ...doc.data() })));
      } catch (err: any) {
        console.error(err.message);
      }
    };

    getBooks();
  }, []);

  return (
    <div className={`page ${theme}`}>
      <h2 className='quantity'>Найдено книг: {favorites.length}</h2>
      <BookItems books={favorites} />
    </div>
  );
}

export default FavoritesPage;
