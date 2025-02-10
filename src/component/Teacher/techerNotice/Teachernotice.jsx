import "./teacherNotice.css";

//icons
import { IoIosSearch } from "react-icons/io";

import image from "../../../assets/Depth 6, Frame 0.png";

const Teachernotice = () => {
  return (
    <div className="Teachernotice">
      <div className="Teachernotice1">
        <div className="NoticeNavbar">
          <div className="Noticeh1">
            <h1>Notices</h1>
          </div>
          <div className="NoticeCreate">
            <button>Create Notice</button>
          </div>
        </div>

        <div className="NoticeSearch">
          <span>
            <IoIosSearch />
          </span>
          <input type="text" placeholder="Search  for notices..." />
        </div>

        <div className="NoticeDetails">
          <div className="NoticeDetail1">
            <div className="NoticeDetail2">
              <div className="NoticeImage">
                <img src={image} alt="" />
              </div>
              <div className="NoticeInformation">
                <div className="NoticeH3">
                  <h3>Homework due tomorrow</h3>
                </div>
                <div className="Noticep">
                  <p>Sent to students in your class</p>
                </div>
              </div>
            </div>
            <div className="NoticeTime">
              <p>Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachernotice;
