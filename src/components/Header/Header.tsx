import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import { FirebaseContext } from '@context/FirebaseContext';
import { useTypedSelector } from '@hooks/useTypedSelector';
import TextButton from '@UI/Button/MUIButton/TextButton/MUITextButton';
import Dropdown from '@UI/DropDown/MUIDropDown/DroprDown';
import SearchInput from '@UI/SearchInput/SearchInput';

import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { page } = useTypedSelector((state) => state.request);

  const defaultAction = useCallback(() => {
    if (page !== 0) dispatch({ type: 'RESET_PAGE' });
    navigate('./');
  }, []);

  const setFilter = useCallback((filterOption: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: filterOption });
  }, []);

  const setSort = useCallback((sortOption: string) => {
    dispatch({ type: 'SET_SORT', payload: sortOption });
  }, []);

  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

  const signOut = () => {
    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        <li>
          <Link to='./' data-testid='main-link'>
            Главная
          </Link>
        </li>
        <li>
          <Link to='./favorites' data-testid='favorites-link'>
            Избранное
          </Link>
        </li>
      </ul>
      <SearchInput defaultAction={defaultAction} />
      <div className={styles.dropdown__items}>
        <Dropdown options={filterOptions} defaultAction={defaultAction} action={setFilter} />
        <Dropdown options={sortOptions} defaultAction={defaultAction} action={setSort} />
      </div>

      {user && <TextButton onClick={signOut}>Выйти</TextButton>}
    </header>
  );
}

export default Header;
