import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="Modal content" className={styles.modalImage} />
      </div>
    </div>
  );
};

export default Modal;
