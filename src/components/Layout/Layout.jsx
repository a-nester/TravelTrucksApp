import { Outlet } from 'react-router';
import Message from '../Message/Message';
import { NavBar } from '../NavBar/NavBar';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <section className="container">
      <header className={styles.headerContainer}>
        <NavBar />
      </header>
      <main className={styles.mainContainer}>
        <Message />
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
