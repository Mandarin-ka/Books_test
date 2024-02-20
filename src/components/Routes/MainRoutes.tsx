import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
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
  const auth = getAuth(app);

  const login = async () => {
    // try {
    //   const provider = new GoogleAuthProvider();
    //   setUser(await signInWithPopup(getAuth(), provider));
    // } catch (e: any) {
    //   console.log(e.message);
    // }
  };

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

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
    <Login login={login} />
  );
}

export default MainRoutes;
