import './styles/reset.css';
import './styles/media.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeContext } from './components/Context/ThemeContext';
import Header from './components/Header/Header';
import MainRoutes from './components/Routes/MainRoutes';
import ThemeToggler from './components/UI/ThemeToggler/ThemeToggler';
import BookPage from './pages/BookPage/BookPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header
          category={category}
          sort={sort}
          setRequest={setRequest}
          setCategory={setCategory}
          setSort={setSort}
          setPage={setPage}
        />

        <MainRoutes request={request} category={category} sort={sort} page={page} setPage={setPage} />

        <ThemeToggler />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
