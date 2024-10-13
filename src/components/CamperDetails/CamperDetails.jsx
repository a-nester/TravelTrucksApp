import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import sprite from 'assets/icons/sprite.svg';
import styles from './CamperDetails.module.css';
import { useEffect } from 'react';

export const CamperDetails = () => {
  const camper = useSelector(selectCamperById);

  useEffect(() => {}, [camper]);

  const images = camper.gallery;

  const formattedPrice = camper.price.toLocaleString('en-EU', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  return (
    <div className={styles.camperItem}>
      {/* camper details box */}
      <div className={styles.itemDetais}>
        {/* title box */}
        <div className={styles.itemTitleWrapper}>
          <div className={styles.itemTitle}>
            <h2 className={styles.title}> {camper.name} </h2>
          </div>

          {/* review & location */}
          <div className={styles.reviewWrapper}>
            <div className={styles.review}>
              <svg width={24} height={24}>
                <use href={`${sprite}#star_pressed`} />
              </svg>
              <p>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.location}>
              <svg width={16} height={16}>
                <use href={`${sprite}#map`} />
              </svg>
              {camper.location}
            </div>
          </div>

          <div className={styles.priceWrapper}>
            <h2>{formattedPrice}</h2>
          </div>
        </div>

        <ul className={styles.photoContainer}>
          {images.map((elem, idx) => (
            <li className={styles.photoWrapper} key={idx}>
              <img
                key={idx}
                className={styles.thumbPhoto}
                src={`${elem.thumb}`}
              />
            </li>
          ))}
        </ul>

        <p className={styles.describtion}>{camper.description}</p>
      </div>
    </div>
  );
};

export default CamperDetails;
