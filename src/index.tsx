import { getFirestore } from 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { FirebaseContext } from './context/FirebaseContext';
import { store } from './store';
import { app } from './utils/Firebase';

const db = getFirestore(app);

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
