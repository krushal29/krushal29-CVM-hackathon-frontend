import "./Home.css";
import ProfileDetail from "./ProfileDetail";
// import Lecture from "./Lecture";
import Timetable from "./Timetable";
// import Performance from "./Performance";
// import Deadline from "./Deadline";
import CounsellorDetail from "./CounsellorDetail";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import Cookies from "js-cookie";

const HomeComp = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();

  const role = sessionStorage.getItem("Role");

  console.log(role);
  useEffect(() => {
    if (role != "student") navigate("/");
  }, [role, navigate]);



  return (
    <div className="StudentHome">
      <div className="StudentHome1">
        <div className="StudentProfile">
          <ProfileDetail />
          <div className="StudentNavbar">
            <ul className="nav-list">
              {[
                "Overview",
                "Counsellor",
                "Placement",
                "Competitive Exam",
                "Attendance",
              ].map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active-tab" : ""}
                  onClick={() => {
                    if (tab === "Placement") {
                      navigate("/StudentPlacementOffer");
                    } else if (tab === "Attendance")
                      navigate("/StudentAttence");
                    else if (tab == "Competitive Exam")
                      navigate("/CompetitiveExam");
                    else {
                      setActiveTab(tab);
                    }
                  }}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Render components based on active tab */}
          {activeTab === "Overview" && (
            <div>
              {/* <Lecture /> */}
              <Timetable />
              {/* <Performance /> */}
              {/* <Deadline /> */}
            </div>
          )}
          {activeTab === "Counsellor" && <CounsellorDetail />}
          {/* Add components for Placement, Competitive Exam, and Attendance */}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
