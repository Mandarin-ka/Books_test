import React from 'react';
import { Route, Routes } from 'react-router';

import BookPage from '@pages/BookPage/BookPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import MainPage from '@pages/MainPage/MainPage';

const pathes = {
  mainPage: '/',
  bookPage: '/bookPage/:id',
  favoritesPage: '/favorites',
};

function MainRoutes() {
  return (
    <Routes>
      <Route path={pathes.mainPage} element={<MainPage />} />
      <Route path={pathes.bookPage} element={<BookPage />} />
      <Route path={pathes.favoritesPage} element={<FavoritesPage />} />
    </Routes>
  );
}

export default MainRoutes;
