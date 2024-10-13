import { useSelector } from 'react-redux';
import styles from './CamperReview.module.css';
import sprite from 'assets/icons/sprite.svg';
import { selectCamperById } from '../../redux/campers/selectors';

export const CamperReview = () => {
  const camper = useSelector(selectCamperById);
  console.log('rate', camper);

  return (
    <div className={styles.reviewContainer}>
      <ul className={styles.reviewContainer}>
        {camper.reviews.map((elem, idndex) => (
          <li className={styles.review} key={idndex}>
            <div className={styles.wrapper}>
              <div className={styles.icon}>
                <h2>{elem.reviewer_name[0]}</h2>
              </div>
              <div className={styles.title}>
                <p className={styles.name}>{elem.reviewer_name}</p>
                <ul className={styles.rate}>
                  {[...Array(5)].map((_, idx) => (
                    <li key={idx}>
                      <svg
                        width={16}
                        height={16}
                        className={
                          idx < elem.reviewer_rating
                            ? styles.filled
                            : styles.empty
                        }
                      >
                        <use href={`${sprite}#star_default`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>{elem.comment}</p>
          </li>
        ))}
      </ul>
      <div className={styles.bookingContainer}></div>
    </div>
  );
};

export default CamperReview;
