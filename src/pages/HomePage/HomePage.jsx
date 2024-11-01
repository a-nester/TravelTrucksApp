import { useNavigate } from 'react-router';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };
  return (
    <div className={styles.heroContainer}>
      {/* <div className={styles.wrapper}> */}
      <div className={styles.text}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
        <button type="button" onClick={handleClick}>
          View Now
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
