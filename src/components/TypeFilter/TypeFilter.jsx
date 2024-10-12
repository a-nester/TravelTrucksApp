import { useState } from 'react';
import styles from './TypeFilter.module.css';
import sprite from 'assets/icons/sprite.svg';

export const TypeFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const typeOptions = {
    Van: `${sprite}#bi_grid-1x2`,
    Fully_Integrated: `${sprite}#bi_grid`,
    Alcov: `${sprite}#bi_grid-3x3-gap`,
  };

  const handleOptionChange = elem => {
    setSelectedOptions(prevSelected =>
      prevSelected.includes(elem)
        ? prevSelected.filter(item => item !== elem)
        : [...prevSelected, elem]
    );
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
              ${selectedOptions.includes(elem) && styles.checked}`}
          >
            <input
              className={styles.сheckbox}
              type="checkbox"
              checked={selectedOptions.includes(elem)}
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

export default TypeFilter;
