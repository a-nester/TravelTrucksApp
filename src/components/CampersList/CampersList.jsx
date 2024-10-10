import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import { nanoid } from '@reduxjs/toolkit';
import Camper from '../Camper/Camper';
import styles from './CampersList.module.css';

export const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={styles.campersList}>
      {campers
        ? campers.map(camper => {
            return <li key={nanoid()}>{<Camper element={camper} />}</li>;
          })
        : 'no campers'}
    </ul>
  );
};
export default CampersList;
