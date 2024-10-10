import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.svg';
import styles from './NavBar.module.css';
import clsx from 'clsx';

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <NavLink to="/" className={styles.logo}>
        <img src={Logo} />
      </NavLink>
      <div className={styles.wrapper}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </div>
    </div>
  );
};
