import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import Login from '../components/Login/Login';
import { FirebaseContext } from '../context/FirebaseContext';
import BookPage from '../pages/BookPage/BookPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import MainPage from '../pages/MainPage/MainPage';

interface Props {
  request: string;
  category: string;
  sort: string;
  page: number;
  setPage: (value: (value: number) => number) => void;
}

function MainRoutes({ request, category, sort, page, setPage }: Props) {
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
      <Route
        path={'/'}
        element={<MainPage request={request} category={category} sort={sort} page={page} setPage={setPage} />}
      />
      <Route path={'/bookPage/:id'} element={<BookPage />} />
      <Route path={'/favorites'} element={<FavoritesPage />} />
    </Routes>
  ) : (
    <Login />
  );
}

export default MainRoutes;
