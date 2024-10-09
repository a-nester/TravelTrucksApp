import { useDispatch } from 'react-redux';
import { getAllCampers, getCamperById } from '../../redux/campers/operations';

export const HomePage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCamperById(10));
  };
  return (
    <div className="container">
      <h1>Home page</h1>
      <p>Home page</p>
      <button type="button" onClick={handleClick}>
        Button
      </button>
    </div>
  );
};

export default HomePage;
