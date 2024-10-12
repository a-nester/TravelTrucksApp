// import { useDispatch, useSelector } from 'react-redux';
// import { selectCamperById } from '../../redux/campers/selectors';
import sprite from 'assets/icons/sprite.svg';
import styles from './CamperDetails.module.css';
// import { useParams } from 'react-router';
// import { useEffect } from 'react';
// import { getCamperById } from '../../redux/campers/operations';

export const CamperDetails = ({ camper }) => {
  console.log(camper);

  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const camper = useSelector(selectCamperById);

  // useEffect(() => {
  //   dispatch(getCamperById(id));
  // }, [id, dispatch]);

  // const image = camper.gallery[0].original;
  const formattedPrice = camper.price.toLocaleString('en-EU', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  const camperOptions = {
    transmission: `${sprite}#diagram`,
    AC: `${sprite}#wind`,
    engine: `${sprite}#fuel-pump`,
    kitchen: `${sprite}#cup-hot`,
    radio: `${sprite}#ui-radios`,
    bathroom: `${sprite}#bi_droplet`,
    TV: `${sprite}#tv`,
  };

  return (
    <div className={styles.camperItem}>
      {/* camper details box */}
      <div className={styles.itemDetais}>
        {/* title box */}
        <div className={styles.itemTitleWrapper}>
          <div className={styles.itemTitle}>
            <h2> {camper.name} </h2>
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

        <div className={styles.describtion}>{camper.description}</div>

        {/* camper options */}
        <div className={styles.badges}>
          {Object.keys(camperOptions).map(
            el =>
              camper[el] !== false && (
                <div key={el} className={styles.badgesItem}>
                  <svg width={20} height={20}>
                    <use href={`${camperOptions[el]}`} />
                  </svg>
                  <p>{typeof camper[el] === 'boolean' ? el : camper[el]}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
