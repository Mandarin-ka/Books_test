import { getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../Context/FirebaseContext';
import Dropdown from '../UI/DropDown/Dropdown';
import SearchInput from '../UI/SearchInput/SearchInput';
import styles from './Header.module.css';

type Setter = (elem: string) => void;

interface Props {
  category: string;
  sort: string;
  setRequest: Setter;
  setCategory: Setter;
  setSort: Setter;
  setPage: (elem: number) => void;
}

function Header({ category, sort, setRequest, setCategory, setSort, setPage }: Props) {
  const navigate = useNavigate();
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  const defaultAction = () => {
    setPage(0);
    navigate('./');
  };

  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

  const signOut = () => {
    auth.signOut();
  };

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

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
      <SearchInput setRequest={setRequest} setPage={setPage} />
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
