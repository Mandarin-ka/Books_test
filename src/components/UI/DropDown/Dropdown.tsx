import React, { memo } from 'react';
import { useCallback, useState } from 'react';

import styles from './Dropdown.module.css';

interface Props {
  options: string[];
  value: string;
  setValue: (elem: string) => void;
  defaultAction: () => void;
}

const Dropdown = ({ options, value, setValue, defaultAction }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const optionState = () => {
    let result = styles.dropdown__button;
    if (options) {
      result += ' ' + styles.active;
    }
    if (isActive) {
      result += ' ' + styles.opened;
    }

    return result;
  };

  const click = useCallback((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setValue((e.target as HTMLInputElement).value);
    setIsActive((prevValue) => !prevValue);
    defaultAction();
  }, []);

  return (
    <div className={styles.dropdown}>
      <button
        className={optionState()}
        onClick={() => setIsActive(!isActive)}
        style={value === options[0] ? { color: '#000000a1' } : { color: 'black' }}
      >
        {value ? value : options[0]}
      </button>
      {isActive && (
        <div className={styles.dropdown__content}>
          {options.map((option, i) => (
            <input
              type='button'
              key={i}
              className={value === option ? styles.dropdown__item + ' ' + styles.active : styles.dropdown__item}
              value={option}
              onClick={click}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
