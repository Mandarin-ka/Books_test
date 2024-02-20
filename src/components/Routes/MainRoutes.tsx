import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import useAuthState from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router';

import BookPage from '../../pages/BookPage/BookPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import MainPage from '../../pages/MainPage/MainPage';
import { FirebaseContext } from '../Context/FirebaseContext';
import Login from '../Login/Login';

interface Props {
  request: string;
  category: string;
  sort: string;
  page: number;
  setPage: (value: (value: number) => number) => void;
}

function MainRoutes({ request, category, sort, page, setPage }: Props) {
  const { app } = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getAuth(app).currentUser);
  }, [app]);

  if (!user) return <Login />;

  return (
    <Routes>
      <Route
        path={'/'}
        element={<MainPage request={request} category={category} sort={sort} page={page} setPage={setPage} />}
      />
      <Route path={'/bookPage/:id'} element={<BookPage />} />
      <Route path={'/favorites'} element={<FavoritesPage />} />
    </Routes>
  );
}

export default MainRoutes;
