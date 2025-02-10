import "./Achievements.css";

import awards from "../../../assets/Depth 7, Frame.png";
import { useNavigate } from "react-router-dom";

const Achievements = () => {

  const navigate=useNavigate();

  
  return (
    <div className="Achievements">
      <div className="Achievements1">
        <div className="AchievementsHeading">
          <div className="Achievementsh3">
            <h3>Your Achievements</h3>
          </div>
          <div className="AchievementsAddbtn">
            <button onClick={()=>navigate('/Achievements/FormPage')}>Add</button>
          </div>
        </div>

        <div className="Achievementsbtn">
          <div className="AllBtn">
            <button>All</button>
          </div>
          <div className="CertificatesBtn">
            <button>Certificates</button>
          </div>
          <div className="AwardsBtn">
            <button>Awards</button>
          </div>
        </div>


    <div className="cardDetail">
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>

        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>


        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>

        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>


        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
        <div className="CardDetailAwards">
          <div className="Eventphoto">
            <img src={awards} alt="" />
          </div>
          <div className="EventHeading">
            <h5>First place, Science Fair</h5>
          </div>
          <div className="EventYear">
            <p>2022</p>
          </div>
        </div>
    </div>



      </div>
    </div>
  );
};

export default Achievements;
