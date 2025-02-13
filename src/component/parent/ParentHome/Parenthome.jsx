import "./Home.css";
import ProfileDetail from "../../Student/HomeComponent/ProfileDetail";
import Lecture from "../../Student/HomeComponent/Lecture";
import Timetable from "../../Student/HomeComponent/Timetable";
import Performance from "../../Student/HomeComponent/Performance";
import Deadline from "../../Student/HomeComponent/Deadline";
import CounsellorDetail from "../../Student/HomeComponent/CounsellorDetail";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Parenthome = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate=useNavigate();
  const location =useLocation();

  return (
    <div className="StudentHome">
      <div className="StudentHome1">
        <div className="StudentProfile">
          <ProfileDetail />
          <div className="StudentNavbar">
            <ul className="nav-list">
              {["Overview", "Counsellor", "Placement", "Competitive Exam", "Attendance"].map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active-tab" : ""}
                  onClick={() =>{
                    if(tab==="Placement"){
                      navigate('/Placement');
                    }
                    else if(tab==="Attendance") navigate('/PAttendence');
                    else if(tab=="Competitive Exam") navigate('/PCompetitiveExam');
                    else{     
                      setActiveTab(tab)}}
                    }
                    >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Render components based on active tab */}
          {activeTab === "Overview" && (
            <div>
              {location.pathname=='/ParentDashBoard'&&
              <div style={{paddingTop:"10px"}} className="DetailProfile">
                <h4> Name : Pizza Pasta</h4>
                <h4> Enrollment No. : 1230</h4>
                <h4> Branch : Computer Science & Design</h4>
                <h4> Sem : 4</h4>
              </div>
              }
              {location.pathname!='/ParentDashBoard'?(<div> <Lecture />
                <Timetable /></div>):" "}
             
              <Performance />
              {location.pathname!='/ParentDashBoard'? <Deadline />:" "}
             
            </div>
          )}
          {activeTab === "Counsellor" && <CounsellorDetail />}
          {/* Add components for Placement, Competitive Exam, and Attendance */}

        </div>
      </div>
    </div>
  );
};

export default Parenthome;
