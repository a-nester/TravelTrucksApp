import { Outlet } from 'react-router';
import Message from '../Message/Message';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <div className="container">
      <main>
        <NavBar />
        <Message />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
