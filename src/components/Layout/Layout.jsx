import { NavBar } from '../NavBar/NavBar';

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
