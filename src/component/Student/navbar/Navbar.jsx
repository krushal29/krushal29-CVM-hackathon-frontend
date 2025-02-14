import "./navbar.css";
import profile from "../../../assets/image 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
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
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li
                className={location.pathname === "/StudentDashboard" ? "active" : ""}
                onClick={() => handleNavigation("/StudentDashboard")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Dashboard</span>
              </li>
              <li
                className={location.pathname === "/StudentEvent" ? "active" : ""}
                onClick={() => handleNavigation("/StudentEvent")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Event/Calendar</span>
              </li>
              <li
                className={location.pathname === "/Studentsubject" ? "active" : "" || location.pathname === "/StudentsubjectMaterial" ? "active" : ""}
                onClick={() => handleNavigation("/Studentsubject")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Subject Material</span>
              </li>
              {/* <li
                className={location.pathname === "/StudentQuiz" ? "active" : ""}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Quiz</span>
              </li> */}
              <li
                className={location.pathname === "/StudentAttence" ? "active" : ""}
                onClick={() => handleNavigation("/StudentAttence")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Attendance</span>
              </li>
              <li
                className={location.pathname === "/StudentLeave" ? "active" : "" || location.pathname === "/viewLeaveApplication" ? "active" : ""}
                onClick={() => handleNavigation("/StudentLeave")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Leave Application</span>
              </li>
              <li
                className={location.pathname === "/Achievements" ? "active" : ""}
                onClick={() => handleNavigation("/Achievements")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Achievement</span>
              </li>
              <li
                className={location.pathname === "/StudentNotice" ? "active" : ""}
                onClick={() => handleNavigation("/StudentNotice")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Notice</span>
              </li>
              <li
                className={location.pathname === "/StudentPlacementOffer" ? "active" : ""}
                onClick={() => handleNavigation("/StudentPlacementOffer")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Placement</span>
              </li>
              <li
                className={location.pathname === "/StudentFees" ? "active" : ""}
                onClick={() => handleNavigation("/StudentFees")}
                style={{ padding: '0.75rem 1rem' }}
              >
                <span>Fees</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="studentLogout">
          <p onClick={() => handleNavigation('/')} style={{ padding: '0.75rem 1rem' }}>
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;