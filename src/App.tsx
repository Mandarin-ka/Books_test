import './styles/reset.css';
import './styles/media.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import MainRoutes from './Routes/MainRoutes';
import { useTypedSelector } from './types/useTypedSelector';
import ThemeToggler from './UI/ThemeToggler/ThemeToggler';
import { setTheme } from './utils/LocalStorage';

function App() {
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const { theme } = useTypedSelector((state) => state.theme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      dispatch({ type: 'SET_DARK' });
    } else {
      setTheme('light');
      dispatch({ type: 'SET_LIGHT' });
    }
  };

  console.log(page);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header
          category={category}
          sort={sort}
          setRequest={setRequest}
          setCategory={setCategory}
          setSort={setSort}
          setPage={setPage}
        />
      </ErrorBoundary>

      <MainRoutes request={request} category={category} sort={sort} page={page} setPage={setPage} />

      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

export default App;
