import profile from "../../../assets/Depth 7, Frame 0.png";

const ProfileDetail = () => {
  return (
    <div>
      <div className="StudentProfileh2">
        {location.pathname=='/ParentDashBoard'?" ":<h2>Student Profile</h2>}
        
      </div>
      <div className="StudentProfileDetail">
        <div className="profileDetail">
          <div className="profileImg">
            <img src={profile} alt="" />
          </div>
          <div className="ProfileName">
            <div className="profilenameDemo">
              <h4>Jenny Kim</h4>
            </div>
            <div className="profileID">
            {location.pathname=='/ParentDashBoard'?<p>Father & Mother</p>:" "}
            </div>
            <div className="profileDegree">
            {location.pathname=='/ParentDashBoard'?<p>Krushal@gmail.com</p>: " "}
            </div>
            <div className="profileBranch">
            {location.pathname=='/ParentDashBoard'?<p>9409859500</p>:" "}
            </div>
          </div>
        </div>
        <div className="profileEdit">
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
