import React from 'react';
import { useState } from 'react';

import { generateClass } from './config';
import { DropdownProps } from './IDropdown';

import styles from './Dropdown.module.css';

const Dropdown = ({ options, defaultAction, action }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(options[0]);

  const toggleActive = () => setIsActive((prevValue) => !prevValue);

  const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setCurrentValue((e.target as HTMLInputElement).value);
    setIsActive((prevValue) => !prevValue);
    action((e.target as HTMLInputElement).value);
    defaultAction();
  };

  return (
    <div className={styles.dropdown}>
      <button
        data-testid='dropdown'
        className={generateClass(options, currentValue, isActive)}
        onClick={toggleActive}
      >
        {currentValue ? currentValue : options[0]}
      </button>
      {isActive && (
        <div className={styles.dropdown__content}>
          {options.map((option, i) => (
            <input
              data-testid='dropdown-item'
              type='button'
              key={i}
              className={
                currentValue === option
                  ? styles.dropdown__item + ' ' + styles.active
                  : styles.dropdown__item
              }
              value={option}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
