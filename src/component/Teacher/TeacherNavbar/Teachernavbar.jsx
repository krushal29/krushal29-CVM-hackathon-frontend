import '../../Student/navbar/navbar.css'

import profile from "../../../assets/image 1.png";

//icons
import { MdQuiz } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
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
              <li className={location.pathname === "/TeacherDashboard" ? "active" : ""}  onClick={()=>handleNavigation('/TeacherDashboard')}>
                <TbLayoutDashboardFilled />
               <span>Dashboard</span>
              </li>
              <li className={location.pathname === "/teacherEvent" ? "active" : ""} onClick={()=>handleNavigation('/teacherEvent')}>Event/Calander</li>
              <li className={location.pathname === "/TeacherAttendence" ? "active" : ""} onClick={()=>handleNavigation('/TeacherAttendence')}>Mark Attendance</li>
              <li className={location.pathname === "" ? "active" : ""}>
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li className={location.pathname === "/UploadMaterial" ? "active" : ""} onClick={()=>handleNavigation('/UploadMaterial')}>Upload Material</li>
              <li className={location.pathname === "/TecherLeaveStatus" ? "active" : ""} onClick={()=>handleNavigation('/TecherLeaveStatus')}>Leave Status</li>
              <li className={location.pathname === "/TeacherNotice" ? "active" : ""} onClick={()=>handleNavigation('/TeacherNotice')}>
                <span>Notice Board</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="studentLogout">
          <p>
            <AiOutlineLogout />
           <span>Logout</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;