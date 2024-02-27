import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './SearchInput.module.css';

interface Props {
  setRequest: (elem: string) => void;
  defaultAction: () => void;
}

function SearchInput({ setRequest, defaultAction }: Props) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const click = useCallback(() => {
    setRequest(inputValue);
    defaultAction();
  }, [inputValue]);

  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const keyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key.toLowerCase() === 'enter') {
        click();
      }
    },
    [inputValue]
  );

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type='text'
        name=''
        id=''
        placeholder={'Что бы почитать...?'}
        value={inputValue}
        onChange={change}
        onKeyDown={keyPress}
      />
      <button className={styles.searchButton} onClick={click}>
        <div className={styles.loupe}></div>
      </button>
    </div>
  );
}

export default memo(SearchInput);
