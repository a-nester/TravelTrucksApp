import { useSelector } from 'react-redux';

import CampersList from '../../components/CampersList/CampersList';
import { selectCampers } from '../../redux/campers/selectors';

import Filters from '../../components/Filters/Filters';
import styles from './Catalog.module.css';

export const CatalogPage = () => {
  const campers = useSelector(selectCampers);

  return (
    <div className={styles.catalog}>
      {campers && <Filters />}
      {campers && <CampersList />}
    </div>
  );
};

export default CatalogPage;
