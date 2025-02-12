import "./Teacher.css"; // Ensure this CSS file is created



import profile from '../../../assets/image 1.png'
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
            <img
              src={profile}
              alt="Mrs. Johnson"
              className="profile-pic"
            />
            <div>
              <h2>Mrs. Johnson</h2>
              <p>Math Teacher</p>
            </div>
          </div>

          <h3>Qualifications</h3>
          <div className="qualifications">
            <div className="qualification-card">
              <h4>B.S. in Mathematics</h4>
              <p>Stanford University</p>
            </div>
            <div className="qualification-card">
              <h4>M.A. in Teaching</h4>
              <p>Stanford University</p>
            </div>
            <div className="qualification-card">
              <h4>Teaching Credential</h4>
              <p>State of California</p>
            </div>
          </div>

          <h3>Next class</h3>
          <div className="next-class">
            <p>
              <strong>8:00 AM - 9:00 AM</strong>
            </p>
            <p>Algebra I</p>
          </div>

          <h3>Notices</h3>
          <div className="notices">
            <div className="notice-item">
              <h4>Missing student grades</h4>
              <p>
                You have not submitted the student grades for the assignment
                'Algebra I - 3/10' yet. Please submit the grades by the end of
                the day.
              </p>
            </div>
            <div className="notice-item">
              <h4>Parent-teacher conference</h4>
              <p>
                The school is hosting a parent-teacher conference this Saturday.
                Please sign up for a time slot if you haven't already.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
