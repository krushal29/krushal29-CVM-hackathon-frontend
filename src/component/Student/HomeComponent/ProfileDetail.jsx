import profile from "../../../assets/Depth 7, Frame 0.png";

const ProfileDetail = ({props}) => {
  return (
    <div>
      <div className="StudentProfileh2">
        <h2>Student Profile</h2>
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
              <p>Student Id: 1232123321231</p>
            </div>
            <div className="profileDegree">
              <p>BACHELOR OF TECHNOLOGY</p>
            </div>
            <div className="profileBranch">
              <p>(COMPUTER SCIENCE AND DESIGN, ACD 2024-25)</p>
            </div>
          </div>
        </div>
        <div className="profileEdit">
          <button style={!props?{backgroundColor:"#E8EDF5",color:"#0D141C",fontWeight:"800"}:{}}>Edit Profile</button>
          {!props&&<button style={{backgroundColor:"#2194F2",color:"#F7FAFC"}}>Add Public Profile</button>}
          {/* <button>View Public Profile</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
