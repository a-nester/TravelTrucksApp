import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { selectCamperById } from '../../redux/campers/selectors';
import { getCamperById } from '../../redux/campers/operations';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import styles from './CamperPage.module.css';

export const CamperPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);
  const { pathname } = useLocation();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch]);

  return (
    <div className={styles.camperContainer}>
      {camper && <CamperDetails camper={camper} />}
      <ul className={styles.menu}>
        <li>
          <Link to="features">Features</Link>
          <div
            className={pathname.includes('features') ? styles.mark : ''}
          ></div>
        </li>
        <li>
          <Link to="reviews">Review</Link>
          <div
            className={pathname.includes('reviews') ? styles.mark : ''}
          ></div>
        </li>
      </ul>
      <div className={styles.devider}></div>
      <Outlet />
    </div>
  );
};

export default CamperPage;
