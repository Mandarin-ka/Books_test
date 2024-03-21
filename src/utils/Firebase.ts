import { initializeApp } from 'firebase/app';

import { IBook } from '@projectTypes/IBooks';
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

export const addToDB = async (db: Firestore, user: string, book: IBook) => {
  try {
    await setDoc(doc(db, user, book.id), {
      id: book.id,
      volumeInfo: {
        title: book.volumeInfo.title || null,
        authors: book.volumeInfo.authors || null,
        publisher: book.volumeInfo.publisher || null,
        categories: book.volumeInfo.categories || null,
        imageLinks: book.volumeInfo.imageLinks || null,
      },
    });
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const hasBook = async (db: Firestore, user: string, book: IBook) => {
  try {
    const docSnap = await getDoc(doc(db, user, book.id));
    return docSnap.exists();
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const deleteFromBD = async (db: Firestore, user: string, book: IBook) => {
  try {
    const docRef = doc(db, user, book.id);
    await deleteDoc(docRef);
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const getBooks = async (db: Firestore, user: string) => {
  try {
    const data = await getDocs(collection(db, user));
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'books-test-1c383.firebaseapp.com',
  projectId: 'books-test-1c383',
  storageBucket: 'books-test-1c383.appspot.com',
  messagingSenderId: '794209970107',
  appId: '1:794209970107:web:af6d136c6fc8d8064b469e',
  measurementId: 'G-T19LNBVRKT',
});

export const db = getFirestore(app);
