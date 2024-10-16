import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import styles from './CamperDetails.module.css';
import { useEffect, useState } from 'react';
import { formatEU } from '../../helpers/format';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { CommonSvg } from '../CommonSvg/CommonSvg';

export const CamperDetails = () => {
  const camper = useSelector(selectCamperById);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {}, [camper]);

  if (!camper || typeof camper.price !== 'number') {
    return <Loader />;
  }

  const images = camper.gallery;
  const formattedPrice = formatEU(camper.price);

  const handleImageClick = src => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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

        <ul className={styles.photoContainer}>
          {images.map((elem, idx) => (
            <li className={styles.photoWrapper} key={idx}>
              <img
                key={idx}
                className={styles.thumbPhoto}
                src={`${elem.thumb}`}
                onClick={() => handleImageClick(elem.original)}
              />
            </li>
          ))}
        </ul>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={selectedImage}
        />
        <p className={styles.describtion}>{camper.description}</p>
      </div>
    </div>
  );
};

export default CamperDetails;
