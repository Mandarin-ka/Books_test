import { request } from 'http';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';

import BookPage from '../../pages/BookPage/BookPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import MainPage from '../../pages/MainPage/MainPage';

interface Props {
  request: string;
  category: string;
  sort: string;
  page: number;
  setPage: (value: (value: number) => number) => void;
}

function MainRoutes({ request, category, sort, page, setPage }: Props) {
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
