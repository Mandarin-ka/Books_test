import Login from '@components/Login/Login';
import { FirebaseContext } from '@context/FirebaseContext';
import BookPage from '@pages/BookPage/BookPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import MainPage from '@pages/MainPage/MainPage';
import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

function MainRoutes() {
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return user ? (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/bookPage/:id'} element={<BookPage />} />
      <Route path={'/favorites'} element={<FavoritesPage />} />
    </Routes>
  ) : (
    <Login />
  );
}

export default MainRoutes;
