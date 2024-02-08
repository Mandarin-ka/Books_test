import React from 'react';
import Dropdown from '../UI/DropDown/Dropdown';
import SearchInput from '../UI/SearchInput/SearchInput';
import cl from './Header.module.css';

type Setter = (elem: string) => void;

interface Props {
  category: string;
  sort: string;
  setRequest: Setter;
  setCategory: Setter;
  setSort: Setter;
}

function Header({ category, sort, setRequest, setCategory, setSort }: Props) {
  return (
    <header className={cl.header}>
      <SearchInput setRequest={setRequest} />
      <div className={cl.dropdown__items}>
        <Dropdown
          options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
          value={category}
          setValue={setCategory}
        />
        <Dropdown options={['relevance', 'newest']} value={sort} setValue={setSort} />
      </div>
    </header>
  );
}

export default Header;
