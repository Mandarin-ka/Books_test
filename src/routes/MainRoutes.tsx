import React from 'react';
import { Route, Routes } from 'react-router';

import { bookPage, favoritesPage, mainPage } from './Routes';

function MainRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={mainPage} />
      <Route path={'/bookPage/:id'} element={bookPage} />
      <Route path={'/favorites'} element={favoritesPage} />
    </Routes>
  );
}

export default MainRoutes;
