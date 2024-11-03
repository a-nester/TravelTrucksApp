import { useSelector } from 'react-redux';

import CampersList from '../../components/CampersList/CampersList';
import { selectCampers } from '../../redux/campers/selectors';

import Filters from '../../components/Filters/Filters';
import styles from './Catalog.module.css';

export const CatalogPage = () => {
  const campers = useSelector(selectCampers);

  return (
    <section className={styles.catalog}>
      <Filters />
      {campers && <CampersList />}
    </section>
  );
};

export default CatalogPage;
