import { useState } from 'react';
import styles from './Type.module.css';
import sprite from 'assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { addType } from '../../../redux/filters/slice';

export const Type = () => {
  const [selectedOptions, setSelectedOptions] = useState('');
  const dispatch = useDispatch();

  const typeOptions = {
    Van: `${sprite}#bi_grid-1x2`,
    Fully_Integrated: `${sprite}#bi_grid`,
    Alcov: `${sprite}#bi_grid-3x3-gap`,
  };

  const handleOptionChange = elem => {
    const type =
      (elem === 'Van' && 'panelTruck') ||
      (elem === 'Fully_Integrated' && 'fullyIntegrated') ||
      (elem === 'Alcov' && 'alcov');

    setSelectedOptions(elem);
    dispatch(addType(type));
  };

  return (
    <div className={styles.typeFilterContainer}>
      <h2 className={styles.title}>Vehicle type</h2>
      <div className={styles.divider}></div>
      <div className={styles.options}>
        {Object.keys(typeOptions).map(elem => (
          <label
            key={elem}
            className={`${styles.optionBox}
              ${selectedOptions === elem && styles.checked}`}
          >
            <input
              className={styles.сheckbox}
              type="radio"
              value={elem}
              checked={selectedOptions === elem}
              onChange={() => handleOptionChange(elem)}
            />

            <svg width={32} height={32}>
              <use href={`${typeOptions[elem]}`} />
            </svg>
            <p className={styles.text}>{elem.replace(/_/g, ' ')}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Type;
