import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectIsLoading } from '../../redux/campers/selectors';
import { nanoid } from '@reduxjs/toolkit';
import Camper from '../Camper/Camper';
import styles from './CampersList.module.css';
import { useEffect, useState } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import { selectFilters } from '../../redux/filters/selectors';
import Loader from '../Loader/Loader';

export const CampersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!campers.length) {
      dispatch(getAllCampers({ ...filters, page }));
    }

    if (campers.length / 4 < page) {
      setIsActive(false);
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(page + 1);
    dispatch(getAllCampers({ ...filters, page }));
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
      {isLoading && <Loader />}
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
