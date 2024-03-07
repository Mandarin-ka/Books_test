import { FirebaseContext } from '@context/FirebaseContext';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Dropdown from '@UI/DropDown/Dropdown';
import SearchInput from '@UI/SearchInput/SearchInput';
import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { page } = useTypedSelector((state) => state.request);

  const defaultAction = () => {
    if (page !== 0) dispatch({ type: 'RESET_PAGE' });
    navigate('./');
  };

  const setFilter = (filterOption: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: filterOption });
  };

  const setSort = (sortOption: string) => {
    dispatch({ type: 'SET_SORT', payload: sortOption });
  };

  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

  const signOut = () => {
    auth.signOut();
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
          <Link to='./'>Главная</Link>
        </li>
        <li>
          <Link to='./favorites'>Избранное</Link>
        </li>
      </ul>
      <SearchInput defaultAction={defaultAction} />
      <div className={styles.dropdown__items}>
        <Dropdown options={filterOptions} defaultAction={defaultAction} action={setFilter} />
        <Dropdown options={sortOptions} defaultAction={defaultAction} action={setSort} />
      </div>

      {user && (
        <button className={styles.login} onClick={signOut}>
          Выйти
        </button>
      )}
    </header>
  );
}

export default Header;
