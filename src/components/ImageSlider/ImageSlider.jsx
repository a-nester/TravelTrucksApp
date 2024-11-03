// import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ImageSlider.module.css';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';

export const ImageSlider = () => {
  const camper = useSelector(selectCamperById);
  const images = camper.gallery;

  const [isSliderVisible, setIsSliderVisible] = useState(
    window.innerWidth < 768
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = src => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSliderVisible(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.slideContainer}>
      {isSliderVisible ? (
        <Slide indicators={true} arrows={false} canSwipe={true}>
          {images.map((elem, index) => (
            <div key={index}>
              <div className={styles.imageContainer}>
                <img
                  src={elem.thumb}
                  onClick={() => handleImageClick(elem.original)}
                  alt="Camper image"
                />
              </div>
            </div>
          ))}
        </Slide>
      ) : (
        <ul className={styles.photoContainer}>
          {images.map((elem, idx) => (
            <li className={styles.photoWrapper} key={idx}>
              <img
                key={idx}
                className={styles.thumbPhoto}
                src={`${elem.thumb}`}
                onClick={() => handleImageClick(elem.original)}
                alt="Camper image"
              />
            </li>
          ))}
        </ul>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default ImageSlider;
