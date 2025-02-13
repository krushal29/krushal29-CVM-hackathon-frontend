import "./navbar.css";
import profile from "../../../assets/image 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';

// Icons
import { MdQuiz } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { MdEvent } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
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
            <img src={profile} alt="" />
            <span>Admin</span>
          </div>
          <div className="studentNavbar">
            <ul>
              <li
                className={location.pathname === "/StudentDashboard" ? "active" : ""}
                onClick={() => handleNavigation("/StudentDashboard")}
              >
                <TbLayoutDashboardFilled />
                <span>Dashboard</span>
              </li>
              <li
                className={location.pathname === "/StudentEvent" ? "active" : ""}
                onClick={() => handleNavigation("/StudentEvent")}
              ><MdEvent/>
              <span>
                Event/Calendar
              </span>
              </li>
              <li
                // eslint-disable-next-line no-constant-binary-expression
                className={location.pathname === "/Studentsubject" ? "active" : ""||location.pathname === "/StudentsubjectMaterial" ? "active" : ""}
                onClick={() => handleNavigation("/Studentsubject")}
              >
                Subject Material
              </li>
              <li
                className={location.pathname === "/StudentQuiz" ? "active" : ""}
              >
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li
                className={location.pathname === "/StudentAttence" ? "active" : ""}
                onClick={() => handleNavigation("/StudentAttence")}
              ><FontAwesomeIcon icon={faClipboardUser} />
               <span> Attendance</span>
              </li>
              <li
                // eslint-disable-next-line no-constant-binary-expression
                className={location.pathname === "/StudentLeave" ? "active" : "" ||location.pathname === "/viewLeaveApplication" ? "active" : ""}
                onClick={() => handleNavigation("/StudentLeave")}
              >
                Leave Application
              </li>
              <li
                className={location.pathname === "/Achievements" ? "active" : ""}
                onClick={() => handleNavigation("/Achievements")}
              >
                <GrAchievement />
                <span>Achievement</span>
              </li>
              <li
                className={location.pathname === "/StudentNotice" ? "active" : ""}
                onClick={() => handleNavigation("/StudentNotice")}
              >
                Notice
              </li>
              <li
                className={location.pathname === "/StudentPlacementOffer" ? "active" : ""}
                onClick={() => handleNavigation("/StudentPlacementOffer")}
              >
                Placement
              </li>
              <li
                className={location.pathname === "/StudentFees" ? "active" : ""}
                onClick={() => handleNavigation("/StudentFees")}
              >
                Fees
              </li>
            </ul>
          </div>
        </div>
        <div className="studentLogout">
          <p onClick={()=>handleNavigation('/')}>
            <AiOutlineLogout />
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
