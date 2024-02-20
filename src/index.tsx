import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { FirebaseContext } from './components/Context/FirebaseContext';

const app = initializeApp({
  apiKey: 'AIzaSyDfsCMord727tLKYcfvnBTBg6dYbReuSPQ',
  authDomain: 'books-test-1c383.firebaseapp.com',
  projectId: 'books-test-1c383',
  storageBucket: 'books-test-1c383.appspot.com',
  messagingSenderId: '794209970107',
  appId: '1:794209970107:web:af6d136c6fc8d8064b469e',
  measurementId: 'G-T19LNBVRKT',
});

const firestore = getFirestore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ app, firestore }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
