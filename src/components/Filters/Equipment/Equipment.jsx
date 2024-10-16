import { useEffect, useState } from 'react';
import styles from './Equipment.module.css';
import { useDispatch } from 'react-redux';
import { addEquipment } from '../../../redux/filters/slice';
import { capitalizeFirstLetter } from '../../../helpers/format';
import { CommonSvg } from '../../CommonSvg/CommonSvg';

export const Equipment = () => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({});

  const equipmentOptions = {
    AC: 'wind',
    transmission: 'diagram',
    kitchen: 'cup-hot',
    TV: 'tv',
    bathroom: 'bi_droplet',
  };

  const handleOptionChange = elem => {
    setSelectedOptions(prevSelected => {
      if (elem in prevSelected) {
        const { [elem]: removed, ...rest } = prevSelected; // якщо існує, видаляємо ключ
        return rest; // повертаємо об'єкт без цього ключа
      } else {
        return {
          ...prevSelected,
          [elem]: elem !== 'transmission' ? true : 'Automatic',
        }; // якщо не існує, додаємо його з true (+ виключення для коробки передач)
      }
    });
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
            <CommonSvg width={32} height={32} iconId={equipmentOptions[elem]} />
            <p>
              {elem !== 'transmission'
                ? capitalizeFirstLetter(elem)
                : 'Automatic'}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
