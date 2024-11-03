import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import styles from './CamperDetails.module.css';
import { useEffect } from 'react';
import { formatEU } from '../../helpers/format';
import Loader from '../Loader/Loader';
import { CommonSvg } from '../CommonSvg/CommonSvg';
import ImageSlider from '../ImageSlider/ImageSlider';

export const CamperDetails = () => {
  const camper = useSelector(selectCamperById);

  useEffect(() => {}, [camper]);

  if (!camper || typeof camper.price !== 'number') {
    return <Loader />;
  }

  const images = camper.gallery;
  const formattedPrice = formatEU(camper.price);

  return (
    <section className={styles.camperItem}>
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
              <CommonSvg width={16} height={16} iconId={'star_pressed'} />
              <p>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.location}>
              <CommonSvg width={16} height={16} iconId={'map'} />
              {camper.location}
            </div>
          </div>

          <div className={styles.priceWrapper}>
            <h2>{formattedPrice}</h2>
          </div>
        </div>

        <ImageSlider images={images} />

        <p className={styles.describtion}>{camper.description}</p>
      </div>
    </section>
  );
};

export default CamperDetails;
