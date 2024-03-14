import styles from './Dropdown.module.css';

export const generateClass = (options: string[], currentValue: string, isActive: boolean) => {
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
