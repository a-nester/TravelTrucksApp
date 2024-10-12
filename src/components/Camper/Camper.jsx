import { useNavigate } from 'react-router';
import styles from './Camper.module.css';
import sprite from 'assets/icons/sprite.svg';

export const Camper = ({ element }) => {
  const navigate = useNavigate();
  const image = element.gallery[0].original;
  const formattedPrice = element.price.toLocaleString('en-EU', {
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

  const handleClick = () => {
    navigate(`/catalog/${element.id}`);
  };

  return (
    <div className={styles.camperItem}>
      <img className={styles.ItemImg} src={image} />

      {/* camper details box */}
      <div className={styles.itemDetais}>
        {/* title box */}
        <div className={styles.itemTitleWrapper}>
          <div className={styles.itemTitle}>
            <h2> {element.name} </h2>
            <div className={styles.priceWrapper}>
              <h2>{formattedPrice}</h2>
              <svg width={26} height={24}>
                <use href={`${sprite}#heart_default`} />
              </svg>
            </div>
          </div>

          {/* review & location */}
          <div className={styles.reviewWrapper}>
            <div className={styles.review}>
              <svg width={24} height={24}>
                <use href={`${sprite}#star_pressed`} />
              </svg>
              <p>{`${element.rating} (${element.reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.location}>
              <svg width={16} height={16}>
                <use href={`${sprite}#map`} />
              </svg>
              {element.location}
            </div>
          </div>
        </div>

        <div className={styles.describtion}>{element.description}</div>

        {/* camper options */}
        <div className={styles.badges}>
          {Object.keys(camperOptions).map(
            el =>
              element[el] !== false && (
                <div key={el} className={styles.badgesItem}>
                  <svg width={20} height={20}>
                    <use href={`${camperOptions[el]}`} />
                  </svg>
                  <p>{typeof element[el] === 'boolean' ? el : element[el]}</p>
                </div>
              )
          )}
        </div>
        {/* Details button */}
        <button className={styles.detailsButton} onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
