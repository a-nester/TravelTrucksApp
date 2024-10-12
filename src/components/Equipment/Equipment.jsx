import { useState } from 'react';
import styles from './Equipment.module.css';
import sprite from 'assets/icons/sprite.svg';

export const Equipment = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const equipmentOptions = {
    AC: `${sprite}#wind`,
    Automatic: `${sprite}#diagram`,
    Kitchen: `${sprite}#cup-hot`,
    TV: `${sprite}#tv`,
    Bathroom: `${sprite}#bi_droplet`,
  };

  const handleOptionChange = elem => {
    setSelectedOptions(prevSelected =>
      prevSelected.includes(elem)
        ? prevSelected.filter(item => item !== elem)
        : [...prevSelected, elem]
    );
  };

  return (
    <div className={styles.equipmentContainer}>
      <h2 className={styles.title}>Vehicle equipment</h2>
      <div className={styles.divider}></div>
      <div className={styles.options}>
        {Object.keys(equipmentOptions).map(elem => (
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
              <use href={`${equipmentOptions[elem]}`} />
            </svg>
            <p>{elem}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
