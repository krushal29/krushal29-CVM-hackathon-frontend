import Navbar from "../navbar/Navbar";

//css
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className="LayoutFlex">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="secondside">{children}</div>
    </div>
  );
};

export default Layout;
