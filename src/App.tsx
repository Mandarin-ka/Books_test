import './styles/reset.css';
import './styles/media.css';

import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';
import MainRoutes from './Routes/MainRoutes';
import ThemeToggler from './UI/ThemeToggler/ThemeToggler';

function App() {
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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

        <ErrorBoundary>
          <MainRoutes request={request} category={category} sort={sort} page={page} setPage={setPage} />
        </ErrorBoundary>

        <ThemeToggler theme={theme} setTheme={setTheme} />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
