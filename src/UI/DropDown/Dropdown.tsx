import React, { memo } from 'react';
import { useCallback, useState } from 'react';

import styles from './Dropdown.module.css';

interface Props {
  action: (elem: string) => void;
  options: string[];
  defaultAction: () => void;
}

const Dropdown = ({ options, defaultAction, action }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentValue, setCurrentValue] = useState(options[0]);

  const optionHandler = () => {
    let result = styles.dropdown__button;
    if (options) {
      result += ' ' + styles.active;
    }
    if (isActive) {
      result += ' ' + styles.opened;
    }

    return result;
  };

  const onClick = useCallback((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setCurrentValue((e.target as HTMLInputElement).value);
    setIsActive((prevValue) => !prevValue);
    action((e.target as HTMLInputElement).value);
    defaultAction();
  }, []);

  return (
    <div className={styles.dropdown}>
      <button
        className={optionHandler()}
        onClick={() => setIsActive(!isActive)}
        style={currentValue === options[0] ? { color: '#000000a1' } : { color: 'black' }}
      >
        {currentValue ? currentValue : options[0]}
      </button>
      {isActive && (
        <div className={styles.dropdown__content}>
          {options.map((option, i) => (
            <input
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

export default memo(Dropdown);
