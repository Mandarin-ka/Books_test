import { getAuth } from 'firebase/auth';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IBook } from '../../../interfaces/IBooks';
// import { deleteItem, getItems, setItem } from '../../../utils/localStorage';
import { FirebaseContext } from '../../Context/FirebaseContext';
import { ThemeContext } from '../../Context/ThemeContext';
import styles from './BookItem.module.css';

function BookItem({ book }: { book: IBook }) {
  const { theme } = useContext(ThemeContext);
  const { app, db } = useContext(FirebaseContext);

  const getUser = () => {
    return getAuth(app).currentUser.uid;
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      try {
        const docRef = doc(db, getUser(), book.id);
        const docSnap = await getDoc(docRef);
        setIsFavorite(docSnap.exists());
      } catch (err: any) {
        console.error(err.message);
      }
    };

    getBook();
  }, []);

  const addToDB = async () => {
    await setDoc(doc(db, getUser(), book.id), {
      id: book.id,
      volumeInfo: {
        title: book.volumeInfo.title || null,
        authors: book.volumeInfo.authors || null,
        publisher: book.volumeInfo.publisher || null,
        categories: book.volumeInfo.categories || null,
        imageLinks: book.volumeInfo.imageLinks || null,
      },
    });
  };

  const deleteFromBD = async () => {
    const docRef = doc(db, getUser(), book.id);
    await deleteDoc(docRef);
  };

  const toggleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (!isFavorite) {
      addToDB();
    } else {
      deleteFromBD();
    }

    setIsFavorite((prevValue) => !prevValue);
  };

  return (
    book && (
      <Link to={`/bookPage/${book.id}`}>
        <div className={styles.book__item + ' ' + styles[theme]}>
          <div
            className={isFavorite ? styles.heart + ' ' + styles.active : styles.heart}
            onClick={toggleFavorite}></div>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail}
            alt={book.volumeInfo.title}
            className={styles.book__img}
          />
          <p className={styles.type + ' ' + styles[theme]}>{book.volumeInfo?.categories}</p>
          <h2 className={styles.title + ' ' + styles[theme]}>{book.volumeInfo?.title}</h2>
          <p className={styles.authors + ' ' + styles[theme]}>{book.volumeInfo.authors?.join(', ')}</p>
        </div>
      </Link>
    )
  );
}

export default BookItem;
