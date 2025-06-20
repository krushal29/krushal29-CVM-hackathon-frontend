import "./navbar.css";
import profile from "../../../assets/profilePhoto1.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
            <span>Teacher</span>
          </div>
          <div className="studentNavbar">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <li
                className={
                  location.pathname === "/TeacherDashboard" ? "active" : ""
                }
                onClick={() => handleNavigation("/TeacherDashboard")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Dashboard</span>
              </li>
              {/* <li 
                className={location.pathname === "/StudentProfile" ? "active" : ""}
                onClick={() => handleNavigation('/StudentProfile')}
                style={{ padding: '0.5rem 1rem' }}
              >
                <span>Student Profile</span>
              </li> */}
              <li
                className={
                  location.pathname === "/teacherEvent" ? "active" : ""
                }
                onClick={() => handleNavigation("/teacherEvent")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Event/Calander</span>
              </li>
              <li
                className={
                  location.pathname === "/TeacherAttendence" ? "active" : ""
                }
                onClick={() => handleNavigation("/TeacherAttendence")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Mark Attendance</span>
              </li>
              <li
                className={
                  location.pathname === "/UploadMaterial" ? "active" : ""
                }
                onClick={() => handleNavigation("/UploadMaterial")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Upload Material</span>
              </li>
              <li
                className={
                  location.pathname === "/TecherLeaveStatus" ? "active" : ""
                }
                onClick={() => handleNavigation("/TecherLeaveStatus")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Leave Status</span>
              </li>
              <li
                className={
                  location.pathname === "/TeacherNotice" ? "active" : ""
                }
                onClick={() => handleNavigation("/TeacherNotice")}
                style={{ padding: "0.5rem 1rem" }}
              >
                <span>Notice Board</span>
              </li>
              {/* <li 
                className={location.pathname === "/TeacherViewStudentProfile" ? "active" : ""}
                onClick={() => handleNavigation('/TeacherViewStudentProfile')}
                style={{ padding: '0.5rem 1rem' }}
              >
                <span>View Student Profile</span>
              </li> */}
            </ul>
          </div>
        </div>
        <div
          className="studentLogout"
          style={{ marginTop: "auto" }}
          onClick={() => {
            sessionStorage.clear();
            Cookies.remove("Token");
            navigate('/');
          }}
        >
          <p style={{ padding: "0.5rem 1rem" }}>
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
