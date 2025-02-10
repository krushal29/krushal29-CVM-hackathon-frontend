import "./navbar.css";

import profile from "../../../assets/image 1.png";

//icons
import { MdQuiz } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

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
              <li onClick={()=>navigate('/StudentDashboard')}>
                <TbLayoutDashboardFilled />
               <span>Dashboard</span>
              </li>
              <li onClick={()=>navigate('/StudentEvent')}>Event/Calander</li>
              <li onClick={()=>navigate('/StudentsubjectMaterial')}>Subject Material</li>
              <li>
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li onClick={()=>navigate('/StudentAttence')}>Attendence</li>
              <li onClick={()=>navigate('/StudentLeave')}>Leave Application</li>
              <li onClick={()=>navigate('/Achievements')}>
                <GrAchievement />
                <span>Achievement</span>
              </li>
              <li onClick={()=>navigate('/StudentNotice')}>Notice</li>
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
