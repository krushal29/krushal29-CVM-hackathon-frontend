import "../../Student/navbar/navbar.css";
import profile from "../../../assets/image 1.png";
import parentPhoto from '../../../assets/parentPhoto.jpeg'
import Cookies from "js-cookie";

// Icons

import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const PNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="studentnavbar">
      <div className="studentnavbar1">
        <div className="studentProfileNavbar">
          <div className="studentPrpfile">
            <img src={parentPhoto} alt="" />
            <span>Parent</span>
          </div>
          <div className="studentNavbar">
            <ul>
              <li
                className={
                  location.pathname === "/ParentDashBoard" ? "active" : ""
                }
                onClick={() => handleNavigation("/ParentDashBoard")}
              >
                <TbLayoutDashboardFilled />
                <span>Dashboard</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="studentLogout">
          <p
            onClick={() => {
              sessionStorage.clear();
              Cookies.remove("Token");
              handleNavigation("/");
            }}
          >
            <AiOutlineLogout />
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PNavbar;
