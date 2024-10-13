import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import { nanoid } from '@reduxjs/toolkit';
import Camper from '../Camper/Camper';
import styles from './CampersList.module.css';
import { useEffect, useState } from 'react';
import { getAllCampers } from '../../redux/campers/operations';

export const CampersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getAllCampers(page));
  }, [dispatch, page]);

  const campers = useSelector(selectCampers);

  const handleLoadMore = () => {
    setPage(page + 1);
    if (campers.length / 4 < page) {
      setIsActive(false);
    }
  };
  return (
    <div className={styles.campersListContainer}>
      <ul className={styles.campersList}>
        {campers
          ? campers.map(camper => (
              <li key={nanoid()}>{<Camper element={camper} />}</li>
            ))
          : 'no campers'}
      </ul>
      {isActive && (
        <button
          className={styles.loadMoreButton}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};
export default CampersList;
