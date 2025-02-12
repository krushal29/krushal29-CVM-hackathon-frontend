// import Navbar from ".";

import '../../Student/layout/layout.css'
import AdminNavbar from '../Adminnavbar/AdminNavbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="LayoutFlex">
      <div className="navbar">
        <AdminNavbar />
      </div>
      <div className="secondside">{children}</div>
    </div>
  );
};

export default AdminLayout;
