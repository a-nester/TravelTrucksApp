import Message from '../Message/Message';
import { NavBar } from '../NavBar/NavBar';

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      <Message />
      {children}
    </div>
  );
};

export default Layout;
