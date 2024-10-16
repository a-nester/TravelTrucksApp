import { useSelector } from 'react-redux';
import styles from './CamperReview.module.css';
import { selectCamperById } from '../../redux/campers/selectors';
import BookingForm from '../BookingForm/BookingForm';
import { CommonSvg } from '../CommonSvg/CommonSvg';

export const CamperReview = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={styles.reviewContainer}>
      <ul className={styles.reviewlist}>
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
                      <CommonSvg
                        width={16}
                        height={16}
                        iconId={'star_default'}
                        className={
                          idx < elem.reviewer_rating
                            ? styles.filled
                            : styles.empty
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>{elem.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};

export default CamperReview;
