import { getFirestore } from 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { FirebaseContext } from './context/FirebaseContext';
import { app } from './utils/Firebase';

const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ app, db }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
