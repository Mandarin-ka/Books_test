import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './routes/MainRoutes';
import Header from '@components/Header/Header';
import Login from '@components/Login/Login';
import { FirebaseContext } from '@context/FirebaseContext';
import ThemeToggler from '@UI/ThemeToggler/ThemeToggler';
import { getAuth } from 'firebase/auth';

import './styles/reset.css';
import './styles/media.css';

function App() {
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <ThemeToggler />
    </BrowserRouter>
  );
}

export default App;
