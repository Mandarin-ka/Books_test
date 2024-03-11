import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { FirebaseContext } from '@context/FirebaseContext';
import { store } from '@store/index';
import { app, db } from '@utils/Firebase';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={{ app, db }}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>
);
