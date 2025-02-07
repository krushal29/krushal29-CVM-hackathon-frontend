import "./navbar.css";

import profile from "../../../assets/image 1.png";

//icons
import { MdQuiz } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
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
              <li>Subject Material</li>
              <li>
                <MdQuiz />
                <span>Quiz</span>
              </li>
              <li>Attendence</li>
              <li>Leave Application</li>
              <li>
                <GrAchievement />
                <span>Achievement</span>
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
