import { useState } from 'react';
import styles from './Location.module.css';
import { useDispatch } from 'react-redux';
import { addLocation } from '../../../redux/filters/slice';
import { CommonSvg } from '../../CommonSvg/CommonSvg';

export const Location = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    setInputValue(evt.target.value);
    dispatch(addLocation(evt.target.value.trim()));
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
        <CommonSvg
          width={20}
          height={20}
          iconId={'map'}
          className={inputValue ? styles.iconFilled : styles.icon}
        />
      </form>
    </div>
  );
};

export default Location;
