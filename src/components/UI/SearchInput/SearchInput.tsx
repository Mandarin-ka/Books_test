import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import cl from './SearchInput.module.css';

function SearchInput({ setRequest }: { setRequest: (request: string) => void }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function click() {
    setRequest(inputValue);
    navigate('./');
  }

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function keyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.toLowerCase() === 'enter') {
      setRequest(inputValue);
      navigate('./');
    }
  }

  return (
    <div className={cl.search}>
      <input
        className={cl.input}
        type='text'
        name=''
        id=''
        placeholder={'Что бы почитать...?'}
        value={inputValue}
        onChange={change}
        onKeyDown={keyPress}
      />
      <button className={cl.searchButton} onClick={click}>
        <div className={cl.loupe}></div>
      </button>
    </div>
  );
}

export default SearchInput;
