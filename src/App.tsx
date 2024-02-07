import React from 'react';
import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookPage from './components/pages/BookPage';
import './styles/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/bookPage/:id'} element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
