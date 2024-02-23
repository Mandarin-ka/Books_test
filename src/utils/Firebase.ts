import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { IBook } from '../interfaces/IBooks';

export const addToDB = async (db, user: string, book: IBook) => {
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

export const hasBook = async (db, user: string, book: IBook, setFavorite: (elem: boolean) => void) => {
  try {
    const docSnap = await getDoc(doc(db, user, book.id));
    setFavorite(docSnap.exists());
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const deleteFromBD = async (db, user: string, book: IBook) => {
  try {
    const docRef = doc(db, user, book.id);
    await deleteDoc(docRef);
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const getBooks = async (db, user: string, setBooks: (elems: IBook[]) => void) => {
  try {
    const data = await getDocs(collection(db, user));
    setBooks(data.docs.map((doc: any) => ({ ...doc.data() })));
  } catch (err) {
    console.error((err as Error).message);
  }
};
