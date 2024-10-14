import { useDispatch, useSelector } from 'react-redux';
import { getFilteredCampers } from '../../redux/campers/operations';
import { selectFilters } from '../../redux/filters/selectors';
import Equipment from './Equipment/Equipment';
import Location from './Location/Location';
import Type from './Type/Type';
import styles from './Filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearch = () => {
    dispatch(getFilteredCampers(filters));
  };
  return (
    <div className={styles.fitersContainer}>
      <Location />
      <h3 className={styles.filtersTitle}>Filters</h3>
      <Equipment />
      <Type />
      <button
        className={styles.searchButton}
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
