import React, { useContext, useEffect, useState } from 'react';

import BookItems from '@components/BookItems/BookItems';
import { FirebaseContext } from '@context/FirebaseContext';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { Typography } from '@mui/material';
import { IBook } from '@projectTypes/IBooks';
import { getBooks } from '@utils/Firebase';
import { getAuth } from 'firebase/auth';

function FavoritesPage() {
  const { theme } = useTypedSelector((state) => state.theme);
  const { app, db } = useContext(FirebaseContext);
  const [favorites, setFavorites] = useState<IBook[]>([]);
  const user = getAuth(app).currentUser.uid;

  useEffect(() => {
    const getData = async () => {
      const data = await getBooks(db, user);

      setFavorites(data);
    };

    getData();
  }, []);

  return (
    <div className={`page ${theme}`} data-testid='favorites-page'>
      <Typography variant='h4' align='center' sx={{ marginBottom: '30px' }}>
        Найдено книг: {favorites.length}
      </Typography>
      <BookItems books={favorites} />
    </div>
  );
}

export default FavoritesPage;
