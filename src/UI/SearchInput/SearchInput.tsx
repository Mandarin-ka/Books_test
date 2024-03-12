import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './SearchInput.module.css';

function SearchInput({ defaultAction }: { defaultAction: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: 'SET_SEARCH', payload: inputValue });
    defaultAction();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      onClick();
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type='text'
        name=''
        id=''
        placeholder={'Что бы почитать...?'}
        value={inputValue}
        onChange={onChange}
        onKeyDown={keyPress}
        data-testid='search'
      />
      <button className={styles.searchButton} onClick={onClick}>
        <div className={styles.loupe}></div>
      </button>
    </div>
  );
}

export default memo(SearchInput);
