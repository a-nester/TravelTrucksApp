import { useNavigate } from 'react-router';
import styles from './Camper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavourites,
  removeFromFavourites,
} from '../../redux/favourites/slice';
import { selectFavourites } from '../../redux/favourites/selectors';
import Loader from '../Loader/Loader';
import { CommonSvg } from '../CommonSvg/CommonSvg';

export const Camper = ({ element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favourites = useSelector(selectFavourites);

  if (!element || !element.gallery || element.gallery.length === 0) {
    return <Loader />;
  }
  const image = element.gallery[0].original;
  const formattedPrice = element.price.toLocaleString('en-EU', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });

  const camperOptions = {
    transmission: 'diagram',
    AC: 'wind',
    engine: 'fuel-pump',
    kitchen: 'cup-hot',
    radio: 'ui-radios',
    bathroom: 'bi_droplet',
    TV: 'tv',
  };

  const handleClick = () => {
    navigate(`/catalog/${element.id}/features`);
  };

  const handleFavourites = () => {
    favourites.some(elem => elem.id === element.id)
      ? dispatch(removeFromFavourites(element.id))
      : dispatch(addToFavourites(element.id));
  };

  return (
    <section className={styles.camperItem}>
      <img className={styles.ItemImg} src={image} />

      {/* camper details box */}
      <div className={styles.itemDetais}>
        {/* title box */}
        <div className={styles.itemTitleWrapper}>
          <div className={styles.itemTitle}>
            <h2> {element.name} </h2>
            <div className={styles.priceWrapper}>
              <h2>{formattedPrice}</h2>
              <button
                className={styles.favouriteButton}
                type="button"
                onClick={handleFavourites}
              >
                <CommonSvg
                  width={26}
                  height={26}
                  iconId={'heart_default'}
                  className={
                    favourites.some(elem => elem.id === element.id)
                      ? styles.heartPressed
                      : styles.heartDefault
                  }
                />
              </button>
            </div>
          </div>

          {/* review & location */}
          <div className={styles.reviewWrapper}>
            <div className={styles.review}>
              <CommonSvg width={16} height={16} iconId={'star_pressed'} />
              <p>{`${element.rating} (${element.reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.location}>
              <CommonSvg width={16} height={16} iconId={'map'} />
              {element.location}
            </div>
          </div>
        </div>

        <div className={styles.describtion}>{element.description}</div>

        {/* camper options */}
        <ul className={styles.badges}>
          {Object.keys(camperOptions).map(
            el =>
              element[el] !== false && (
                <li key={el} className={styles.badgesItem}>
                  <CommonSvg
                    width={20}
                    height={20}
                    iconId={`${camperOptions[el]}`}
                  />
                  <p>{typeof element[el] === 'boolean' ? el : element[el]}</p>
                </li>
              )
          )}
        </ul>
        {/* Details button */}
        <button className={styles.detailsButton} onClick={handleClick}>
          Show more
        </button>
      </div>
    </section>
  );
};

export default Camper;
