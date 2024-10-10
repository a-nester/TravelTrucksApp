import styles from './Camper.module.css';

export const Camper = ({ element }) => {
  console.log(element);
  const image = element.gallery[0].original;
  const formattedPrice = element.price.toLocaleString('en-EU', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  return (
    <div className={styles.camperItem}>
      <img className={styles.ItemImg} src={image} />
      <div className={styles.itemDescribe}>
        <div className={styles.itemTitle}>
          <h2> {element.name} </h2>
          <h2>{formattedPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Camper;
