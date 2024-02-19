import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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

  const defaultAction = () => {
    setPage(0);
    navigate('./');
  };

  const filterOptions = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sortOptions = ['relevance', 'newest'];

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
    </header>
  );
}

export default Header;
