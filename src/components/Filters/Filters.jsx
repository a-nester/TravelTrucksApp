import Equipment from '../Equipment/Equipment';
import Location from '../Location/Location';
import TypeFilter from '../TypeFilter/TypeFilter';
import styles from './Filters.module.css';

export const Filters = () => {
  return (
    <div className={styles.fitersContainer}>
      {/* location box */}
      <Location />
      <h3 className={styles.filtersTitle}>Filters</h3>
      <Equipment />
      <TypeFilter />
      <button className={styles.searchButton} type="button">
        Search
      </button>
    </div>
  );
};

export default Filters;
