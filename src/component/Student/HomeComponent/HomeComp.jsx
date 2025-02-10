import "./Home.css";

//icons

import ProfileDetail from "./ProfileDetail";
import Lecture from "./Lecture";
import Timetable from "./Timetable";
import Performance from "./Performance";
import Deadline from "./Deadline";
import CounsellorDetail from "./CounsellorDetail";
import { useState } from "react";

const HomeComp = () => {
  const [CounsellorDetail1, setCounsellorDetail] = useState(true);

  return (
    <div className="StudentHome">
      <div className="StudentHome1">
        <div className="StudentProfile">
          <ProfileDetail props={CounsellorDetail1}/>

          <div className="StudentNavbar">
            <div className="StudentNavbar1">
              <ul>
                <li style={CounsellorDetail1?{borderBottom:"2px solid black",paddingBottom:"10px",color:"#4A789C"}:{}} onClick={() => setCounsellorDetail(true)}>Overview</li>
                <li style={!CounsellorDetail1?{borderBottom:"2px solid black",paddingBottom:"10px",color:"#4A789C"}:{}}
                  onClick={() => setCounsellorDetail(false)}
                >
                  Counsellor Detail
                </li>
              </ul>
            </div>
          </div>
          {CounsellorDetail1? (
            <div>
              <Lecture />
              <Timetable />
              <Performance />
              <Deadline />
            </div>
          ) : (<CounsellorDetail/>)}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
