import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';

import CamperDetails from '../../components/CamperDetails/CamperDetails';
import { selectCamperById } from '../../redux/campers/selectors';
import { getCamperById } from '../../redux/campers/operations';

export const CamperPage = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch]);
  const camper = useSelector(selectCamperById);
  console.log(camper);

  return (
    <div className="camperContainer">
      {/* camper && <CamperDetails camper={camper} /> */}
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default CamperPage;
