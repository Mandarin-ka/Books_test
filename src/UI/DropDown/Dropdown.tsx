import React from 'react';
import { useState } from 'react';

import styles from './Dropdown.module.css';
import { DropdownProps } from './IDropdown';

const Dropdown = ({ options, defaultAction, action }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(options[0]);

  const generateClass = () => {
    let result = styles.dropdown__button;
    if (options) {
      result += ' ' + styles.active;
    }
    if (isActive) {
      result += ' ' + styles.opened;
    }

    if (currentValue === options[0]) {
      result += ` ${styles.current}`;
    }

    return result;
  };

  const toggleActive = () => setIsActive((prevValue) => !prevValue);

  const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setCurrentValue((e.target as HTMLInputElement).value);
    setIsActive((prevValue) => !prevValue);
    action((e.target as HTMLInputElement).value);
    defaultAction();
  };

  return (
    <div className={styles.dropdown}>
      <button data-testid='dropdown' className={generateClass()} onClick={toggleActive}>
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
