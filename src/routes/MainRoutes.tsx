import React from 'react';
import { Route, Routes } from 'react-router';

import BookPage from '@pages/BookPage/BookPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import MainPage from '@pages/MainPage/MainPage';

function MainRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/bookPage/:id'} element={<BookPage />} />
      <Route path={'/favorites'} element={<FavoritesPage />} />
    </Routes>
  );
}

export default MainRoutes;
