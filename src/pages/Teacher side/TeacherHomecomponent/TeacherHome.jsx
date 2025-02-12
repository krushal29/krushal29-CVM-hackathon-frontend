import "./Teacher.css"; // Ensure this CSS file is created

import profile from "../../../assets/image 1.png";
import notice from '../../../assets/Vector.png'
const TeacherHome = () => {
  return (
    <div className="TeacherHome">
      <div className="TeacherHome1">
        <div className="dashboard-container">
          <h1>
            Good morning, <span className="highlight">Mrs. Johnson</span>
          </h1>
          <p>It's a great day to teach!</p>
          <div className="profile-section">
            <img src={profile} alt="Mrs. Johnson" className="profile-pic" />
            <div>
              <h2 style={{ fontSize: "20px", color: "#272757" }}>
                Mrs. Johnson
              </h2>
              <p style={{ fontSize: "15px", color: "#272757" }}>Math Teacher</p>
            </div>
          </div>

          <h3 style={{ color: "#272757", paddingBottom: "15px" }}>
            Qualifications
          </h3>
          <div className="qualifications">
            <div className="qualification-card">
              <h4 style={{ color: "#272757" }}>B.S. in Mathematics</h4>
              <p style={{ fontSize: "14px" }}>Stanford University</p>
            </div>
            <div className="qualification-card">
              <h4 style={{ color: "#272757" }}>M.A. in Teaching</h4>
              <p style={{ fontSize: "14px" }}>Stanford University</p>
            </div>
            <div className="qualification-card">
              <h4 style={{ color: "#272757" }}>Teaching Credential</h4>
              <p style={{ fontSize: "14px" }}>State of California</p>
            </div>
          </div>

          {/* <h3>Next class</h3>
          <div className="next-class">
            <p>
              <strong>8:00 AM - 9:00 AM</strong>
            </p>
            <p>Algebra I</p>
          </div> */}

          <h3 style={{ color: "#272757", paddingBottom: "15px" }}>Notices</h3>
          <div className="notices">
          <div className="notice-item">
              <img style={{paddingRight:"18px",width:"4%"}} src={notice} alt="" />
              <div className="noticeDetail">
                <h4 style={{color:"#272757"}}>Parent-teacher conference</h4>
                <p style={{color:"#272757",fontWeight:"300"}}>
                  The school is hosting a parent-teacher conference this
                  Saturday. Please sign up for a time slot if you haven't
                  already.
                </p>
              </div>
            </div>
            <div className="notice-item">
              <img style={{paddingRight:"18px",width:"4%"}} src={notice} alt="" />
              <div className="noticeDetail">
                <h4 style={{color:"#272757"}}>Parent-teacher conference</h4>
                <p style={{color:"#272757",fontWeight:"300"}}>
                  The school is hosting a parent-teacher conference this
                  Saturday. Please sign up for a time slot if you haven't
                  already.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
