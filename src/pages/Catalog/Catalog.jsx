import { useDispatch, useSelector } from 'react-redux';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';
import { selectCampers } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import Filters from '../../components/Filters/Filters';
import styles from './Catalog.module.css';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const handleClick = () => {
    console.log(campers);
  };

  return (
    <div className={styles.catalog}>
      {campers && <Filters />}
      {campers && <CampersList />}
    </div>
  );
};

export default CatalogPage;
