import { useDispatch, useSelector } from 'react-redux';
import { getFilteredCampers } from '../../redux/campers/operations';
import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import TypeFilter from '../TypeFilter/TypeFilter';
import styles from './Filters.module.css';
import { selectFilters } from '../../redux/filters/selectors';

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  // const newFilters = { ...filters, ...filters.equipment };

  const handleSearch = () => {
    dispatch(getFilteredCampers(filters));
  };
  return (
    <div className={styles.fitersContainer}>
      {/* location box */}
      <Location />
      <h3 className={styles.filtersTitle}>Filters</h3>
      <Equipment />
      <TypeFilter />
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
