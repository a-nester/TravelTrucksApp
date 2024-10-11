import { useState } from 'react';
import styles from './Location.module.css';
import sprite from 'assets/icons/sprite.svg';

export const Location = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={styles.location}>
      <p className={styles.text}>Location</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="city"
        />
        <svg
          className={inputValue ? styles.iconFilled : styles.icon}
          width={20}
          height={20}
        >
          <use href={`${sprite}#map`} />
        </svg>
      </form>
    </div>
  );
};

export default Location;