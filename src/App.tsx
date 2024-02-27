import './styles/reset.css';
import './styles/media.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import MainRoutes from './Routes/MainRoutes';
import ThemeToggler from './UI/ThemeToggler/ThemeToggler';

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
