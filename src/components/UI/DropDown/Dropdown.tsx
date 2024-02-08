import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import cl from './Dropdown.module.css';

interface Props {
  options: string[];
  category: string;
  setCategory: (elem: string) => void;
}

const Dropdown = ({ options, category, setCategory }: Props) => {
  const [isActive, setIsActive] = useState(false);

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
    setCategory(option);
    setIsActive(!isActive);
  };

  const blur = (option: string) => {
    setCategory(option);
    setIsActive(!isActive);
  };

  return (
    <div className={cl.dropdown}>
      <button className={optionState()} onClick={() => setIsActive(!isActive)}>
        {category ? category : options[0]}
      </button>
      {isActive && (
        <div className={cl.dropdown__content}>
          {options.map((option, i) => (
            <button
              key={i}
              className={option === options[0] ? cl.dropdown__item + ' ' + cl.active : cl.dropdown__item}
              onClick={(e) => click(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
