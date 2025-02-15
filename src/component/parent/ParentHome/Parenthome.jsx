import "./Home.css";
import ProfileDetail from "../../Student/HomeComponent/ProfileDetail";
import Lecture from "../../Student/HomeComponent/Lecture";
import Timetable from "../../Student/HomeComponent/Timetable";
import Deadline from "../../Student/HomeComponent/Deadline";
import CounsellorDetail from "../../Student/HomeComponent/CounsellorDetail";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Parenthome = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();
  const location = useLocation();
  const userId = sessionStorage.getItem("user_id");

  const cook = Cookies.get("Token");
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/parents/${userId}`,
          { headers: { Authorization: `Bearer ${cook}` } }
        );
        console.log(response.data);
        
       
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    data();
  }, []);

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
                      navigate("/Placement");
                    } else if (tab === "Attendance") navigate("/PAttendence");
                    else if (tab == "Competitive Exam")
                      navigate("/PCompetitiveExam");
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
              {location.pathname != "/ParentDashBoard" ? (
                <div>
                  {" "}
                  <Lecture />
                  <Timetable />
                </div>
              ) : (
                " "
              )}

              {/* <Performance /> */}
              {location.pathname != "/ParentDashBoard" ? <Deadline /> : " "}
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
