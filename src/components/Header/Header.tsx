import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../../context/FirebaseContext';
import Dropdown from '../../UI/DropDown/Dropdown';
import SearchInput from '../../UI/SearchInput/SearchInput';
import styles from './Header.module.css';

type Setter = (elem: string) => void;

interface Props {
  category: string;
  sort: string;
  setRequest: Setter;
  setCategory: Setter;
  setSort: Setter;
}

function Header({ category, sort, setRequest, setCategory, setSort }: Props) {
  const navigate = useNavigate();
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const defaultAction = () => {
    dispatch({ type: 'RESET_PAGE' });
    navigate('./');
  };

  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user1) => {
      setUser(user1);
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
      <SearchInput setRequest={setRequest} defaultAction={defaultAction} />
      <div className={styles.dropdown__items}>
        <Dropdown options={filterOptions} value={category} setValue={setCategory} defaultAction={defaultAction} />
        <Dropdown options={sortOptions} value={sort} setValue={setSort} defaultAction={defaultAction} />
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
