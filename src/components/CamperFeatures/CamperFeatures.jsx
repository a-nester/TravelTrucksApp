import { useSelector } from 'react-redux';
import styles from './CamperFeatures.module.css';
import sprite from 'assets/icons/sprite.svg';
import { selectCamperById } from '../../redux/campers/selectors';
import BookingForm from '../BookingForm/BookingForm';

export const CamperFeatures = () => {
  const camper = useSelector(selectCamperById);

  const camperOptions = {
    transmission: `${sprite}#diagram`,
    AC: `${sprite}#wind`,
    engine: `${sprite}#fuel-pump`,
    kitchen: `${sprite}#cup-hot`,
    radio: `${sprite}#ui-radios`,
    bathroom: `${sprite}#bi_droplet`,
    TV: `${sprite}#tv`,
  };

  const camperDetails = {
    Form: 'Panel Truck',
    Length: '5.4 m',
    Width: '2.01 m',
    Height: '2.05 m',
    Tank: '132 l',
    Consumption: '12.4l/100km',
  };

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.badges}>
          {Object.keys(camperOptions).map(
            elem =>
              camper[elem] !== false && (
                <div key={elem} className={styles.badgesItem}>
                  <svg width={20} height={20}>
                    <use href={`${camperOptions[elem]}`} />
                  </svg>
                  <p>
                    {typeof camper[elem] === 'boolean' ? elem : camper[elem]}
                  </p>
                </div>
              )
          )}
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Vehicle details</h3>
          <div className={styles.devider}></div>
          <ul className={styles.describe}>
            {Object.keys(camperDetails).map((elem, idx) => (
              <li key={idx} className={styles.describeItem}>
                <p>{elem}</p>
                <p>{camper[elem.toLowerCase()]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperFeatures;
