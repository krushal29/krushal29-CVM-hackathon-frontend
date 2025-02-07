import '../../Student/navbar/navbar.css'

import profile from "../../../assets/image 1.png";

//icons
import { MdQuiz } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Navbar = () => {
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
              <li>
                <TbLayoutDashboardFilled />
               <span>Dashboard</span>
              </li>
              <li>Event/Calander</li>
              <li>Mark Attendance</li>
              <li>
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li>Upload Material</li>
              <li>Leave Status</li>
              <li>
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
