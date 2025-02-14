// import "../../Student/navbar/navbar.css";
// import profile from "../../../assets/image 1.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';

// // Icons
// import { MdQuiz } from "react-icons/md";
// import { GrAchievement } from "react-icons/gr";
// import { AiOutlineLogout } from "react-icons/ai";
// import { MdEvent } from "react-icons/md";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { useNavigate, useLocation } from "react-router-dom";

// const 
// AdminNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="studentnavbar">
//       <div className="studentnavbar1">
//         <div className="studentProfileNavbar">
//           <div className="studentPrpfile">
//             <img src={profile} alt="" />
//             <span>Admin</span>
//           </div>
//           <div className="studentNavbar">
//             <ul>
//               <li
//                 className={location.pathname === "/adminDashboard" ? "active" : ""}
//                 onClick={() => handleNavigation("/adminDashboard")}
//               >
                
//                 <span>Dashboard</span>
//               </li>
//               <li
//                 className={location.pathname === "/CreateNewYear" ? "active" : ""}
//                 onClick={() => handleNavigation("/CreateNewYear")}
//               >
//               <span>
//                 Create New Year
//               </span>
//               </li>
//               <li style={{width:"100%"}}
//                 className={location.pathname === "/newsemcreation" ? "active" : ""}
//                 onClick={() => handleNavigation("/newsemcreation")}
//               >
//                 Create New Semester
//               </li>
//               <li
//                 className={location.pathname === "/AdminFees" ? "active" : ""}
//                 onClick={() => handleNavigation("/AdminFees")}
//               >
                
//                 <span>Fees</span>
//               </li>
//               <li
//                 className={location.pathname === "/RegistationStudent" ? "active" : ""}
//                 onClick={() => handleNavigation("/RegistationStudent")}
//               >
//                <span> Registration</span>
//               </li>
//               <li
//                 className={location.pathname === "/AddResult" ? "active" : ""}
//                 onClick={() => handleNavigation("/AddResult")}
//               >
//                 Add Result
//               </li>
//               <li
//                 className={location.pathname === "/CreateUser" ? "active" : ""}
//                 onClick={() => handleNavigation("/CreateUser")}
//               >
//                 Create User
//               </li>
//               <li
//                 className={location.pathname === "/ShowSubject" ? "active" : ""}
//                 onClick={() => handleNavigation("/ShowSubject")}
//               >
//                 Add Subject
//               </li>
//               <li
//                 className={location.pathname === "/AdminPlacement" ? "active" : ""}
//                 onClick={() => handleNavigation("/AdminPlacement")}
//               >
//                 Placement
//               </li>
              
//             </ul>
//           </div>
//         </div>
//         <div className="studentLogout">
//           <p onClick={()=>handleNavigation('/')}>
//             <AiOutlineLogout />
//             <span>Logout</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNavbar;
import "../../Student/navbar/navbar.css";
import profile from "../../../assets/profilePhoto2jpg.jpeg";

// Icons

import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const AdminNavbar = () => {
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
                className={location.pathname === "/adminDashboard" ? "active" : ""}
                onClick={() => handleNavigation("/adminDashboard")}
              >
                <span>Dashboard</span>
              </li>

              <li
                className={location.pathname === "/CreateNewYear" ? "active" : ""}
                onClick={() => handleNavigation("/CreateNewYear")}
              >
                <span>Create New Year</span>
              </li>

              <li
                className={location.pathname === "/newsemcreation" ? "active" : ""}
                onClick={() => handleNavigation("/newsemcreation")}
              >
                <span>Create New Semester</span>
              </li>

              <li
                className={location.pathname === "/AdminFeetable" ? "active" : ""}
                onClick={() => handleNavigation("/AdminFeetable")}
              >
                <span>Fees</span>
              </li>

              <li
                className={location.pathname === "/RegistationStudent" ? "active" : ""}
                onClick={() => handleNavigation("/RegistationStudent")}
              >
                <span>Registration</span>
              </li>

              <li
                className={location.pathname === "/AddResult" ? "active" : ""}
                onClick={() => handleNavigation("/AddResult")}
              >
                <span>Add Result</span>
              </li>

              <li
                className={location.pathname === "/CreateUser" ? "active" : ""}
                onClick={() => handleNavigation("/CreateUser")}
              >
                <span>Create User</span>
              </li>

              <li
                className={location.pathname === "/ShowSubject" ? "active" : ""}
                onClick={() => handleNavigation("/ShowSubject")}
              >
                <span>Add Subject</span>
              </li>

              <li
                className={location.pathname === "/AdminPlacement" ? "active" : ""}
                onClick={() => handleNavigation("/AdminPlacement")}
              >
                <span>Placement</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="studentLogout">
          <p onClick={() => handleNavigation('/')}>
            <AiOutlineLogout />
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;