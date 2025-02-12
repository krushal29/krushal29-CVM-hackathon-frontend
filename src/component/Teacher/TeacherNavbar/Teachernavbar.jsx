import '../../Student/navbar/navbar.css'

import profile from "../../../assets/image 1.png";

//icons
import { MdQuiz } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
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
              <li onClick={()=>navigate('/TeacherDashboard')}>
                <TbLayoutDashboardFilled />
               <span>Dashboard</span>
              </li>
              <li onClick={()=>navigate('/teacherEvent')}>Event/Calander</li>
              <li onClick={()=>navigate('/TeacherAttendence')}>Mark Attendance</li>
              <li>
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li onClick={()=>navigate('/UploadMaterial')}>Upload Material</li>
              <li onClick={()=>navigate('/TecherLeaveStatus')}>Leave Status</li>
              <li onClick={()=>navigate('/TeacherNotice')}>
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