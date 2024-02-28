import './styles/reset.css';
import './styles/media.css';

import Header from '@components/Header/Header';
import MainRoutes from '@routes/MainRoutes';
import ThemeToggler from '@UI/ThemeToggler/ThemeToggler';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <ThemeToggler />
    </BrowserRouter>
  );
}

export default App;
