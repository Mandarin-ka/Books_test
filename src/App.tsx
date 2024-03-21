import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import MainRoutes from './routes/MainRoutes';
import Header from '@components/Header/Header';
import Login from '@components/Login/Login';
import { FirebaseContext } from '@context/FirebaseContext';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import ThemeToggler from '@UI/ThemeToggler/ThemeToggler';

import './styles/reset.css';
import './styles/media.css';
import './styles/vars.css';

function App() {
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const theme = createTheme({
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeightRegular: 600,
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) return <Login />;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <ThemeToggler />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
