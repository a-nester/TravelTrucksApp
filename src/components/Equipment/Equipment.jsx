import { useEffect, useState } from 'react';
import styles from './Equipment.module.css';
import sprite from 'assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { addEquipment } from '../../redux/filters/slice';

export const Equipment = () => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({});

  const equipmentOptions = {
    AC: `${sprite}#wind`,
    Automatic: `${sprite}#diagram`,
    Kitchen: `${sprite}#cup-hot`,
    TV: `${sprite}#tv`,
    Bathroom: `${sprite}#bi_droplet`,
  };

  const handleOptionChange = elem => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [elem]: !prevSelected[elem],
    }));
  };

  useEffect(() => {
    dispatch(addEquipment(selectedOptions));
  }, [selectedOptions, dispatch]);

  return (
    <div className={styles.equipmentContainer}>
      <h2 className={styles.title}>Vehicle equipment</h2>
      <div className={styles.divider}></div>
      <div className={styles.options}>
        {Object.keys(equipmentOptions).map(elem => (
          <label
            key={elem}
            className={`${styles.optionBox}
              ${selectedOptions[elem] && styles.checked}`}
          >
            <input
              className={styles.сheckbox}
              type="checkbox"
              checked={!!selectedOptions[elem]}
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
