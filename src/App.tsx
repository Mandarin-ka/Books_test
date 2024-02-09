import React, { useState } from 'react';
import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from './components/pages/BookPage';
import './styles/reset.css';
import Header from './components/Header/Header';

function App() {
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [page, setPage] = useState(0);

  return (
    <BrowserRouter>
      <Header category={category} sort={sort} setRequest={setRequest} setCategory={setCategory} setSort={setSort} />
      <Routes>
        <Route
          path={'/'}
          element={<MainPage request={request} category={category} sort={sort} page={page} setPage={setPage} />}
        />
        <Route path={'/bookPage/:id'} element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
