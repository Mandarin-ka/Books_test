import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { FirebaseContext } from '@context/FirebaseContext';
import { store } from '@store/index';
import { app, db } from '@utils/Firebase';

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
