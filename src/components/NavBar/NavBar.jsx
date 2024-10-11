import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../../assets/icons/Logo.svg';
import sprite from 'assets/icons/sprite.svg';

import styles from './NavBar.module.css';

export const NavBar = () => {
  const path = useLocation().pathname;

  return (
    <div className={styles.navBar}>
      <NavLink to="/" className={styles.logo}>
        <svg width={136} height={16}>
          <use href={`${sprite}#Logo`} />
        </svg>
      </NavLink>
      <div className={styles.wrapper}>
        <NavLink to="/" className={path === '/' && styles.active}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={path === '/catalog' && styles.active}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
