import React from 'react';
import Dropdown from '../UI/DropDown/Dropdown';
import SearchInput from '../UI/SearchInput/SearchInput';
import cl from './Header.module.css';

type Setter = (elem: string & number) => void;

interface Props {
  category: string;
  sort: string;
  setRequest: Setter;
  setCategory: Setter;
  setSort: Setter;
  setPage: Setter;
}

function Header({ category, sort, setRequest, setCategory, setSort, setPage }: Props) {
  return (
    <header className={cl.header}>
      <SearchInput setRequest={setRequest} setPage={setPage} />
      <div className={cl.dropdown__items}>
        <Dropdown
          options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
          value={category}
          setValue={setCategory}
          setPage={setPage}
        />
        <Dropdown options={['relevance', 'newest']} value={sort} setValue={setSort} setPage={setPage}/>
      </div>
    </header>
  );
}

export default Header;
