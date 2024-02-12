import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import cl from './Dropdown.module.css';

interface Props {
  options: string[];
  value: string;
  setValue: (elem: string) => void;
  setPage: (elem: number) => void;
}

const Dropdown = ({ options, value, setValue, setPage }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const optionState = () => {
    let result = cl.dropdown__button;
    if (options) {
      result += ' ' + cl.active;
    }
    if (isActive) {
      result += ' ' + cl.opened;
    }

    return result;
  };

  const click = (option: string) => {
    setValue(option);
    setIsActive(!isActive);
    navigate('./');
    setPage(0);
  };

  return (
    <div className={cl.dropdown}>
      <button
        className={optionState()}
        onClick={() => setIsActive(!isActive)}
        style={value === options[0] ? { color: '#000000a1' } : { color: 'black' }}>
        {value ? value : options[0]}
      </button>
      {isActive && (
        <div className={cl.dropdown__content}>
          {options.map((option, i) => (
            <button
              key={i}
              className={value === option ? cl.dropdown__item + ' ' + cl.active : cl.dropdown__item}
              onClick={() => click(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
