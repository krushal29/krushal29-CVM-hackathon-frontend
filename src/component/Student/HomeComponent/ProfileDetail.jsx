import { useEffect, useState } from "react";
import profile from "../../../assets/Depth 7, Frame 0.png";
import axios from "axios";
import Cookies from "js-cookie";

const ProfileDetail = () => {
  const [profile1,setProfile]=useState([]);
  const [branch,setBranch]=useState([]);

  useEffect(()=>{
    const code = async () => {
      const userId = sessionStorage.getItem("user_id");
      console.log(userId);
      const cook = Cookies.get("Token");
      console.log(cook);
      const resopse = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students/${userId}`,
        {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log(resopse);
    

    const resopse1 = await axios.get(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/batch/${resopse.data.batch_id}`,
      {
      headers: {
        Authorization: `Bearer ${cook}`,
      },
    }
  );
  localStorage.setItem("batch_counsellorId",resopse1.data.counciller_id);
  console.log("profile",resopse1);
  setBranch(resopse1.data);
  
    setProfile(resopse.data);
  };
  code();
},[])


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
              <h4>{profile1.first_name} {profile1.last_name}</h4>
            </div>
            <div className="profileID">
            {location.pathname=='/ParentDashBoard'?<p>Father & Mother</p>:`Student ID : ${profile1.enrollment_id}`}
            </div>
            <div className="profileDegree">
            {location.pathname=='/ParentDashBoard'?<p>Krushal@gmail.com</p>: "BACHELOR OF TECHNOLOGY"}
            </div>
            <div className="profileBranch">
            {location.pathname=='/ParentDashBoard'?<p>9409859500</p>:`${branch.branch}-20${branch.year}`}
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
