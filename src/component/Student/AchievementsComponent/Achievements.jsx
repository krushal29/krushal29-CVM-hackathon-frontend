import "./Achievements.css";

import awards from "../../../assets/Depth 7, Frame.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Achievements = () => {
  const cook = Cookies.get("Token");
  const navigate = useNavigate();
  const studentId = sessionStorage.getItem("user_id");

  const [filteredCard, setFilteredCard] = useState([]); // Store filtered data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/achievements/student/${studentId}`,
          { headers: { Authorization: `Bearer ${cook}` } }
        );
        // setCard(response.data.achievements);
        setFilteredCard(response.data.achievements); // Set both states
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(filteredCard);
  


  return (
    <div className="Achievements">
      <div className="Achievements1">
        <div className="AchievementsHeading">
          <div className="Achievementsh3">
            <h2>Your Achievements</h2>
          </div>
          <div className="AchievementsAddbtn">
            <button onClick={() => navigate("/Achievements/FormPage")}>
              Add
            </button>
          </div>
        </div>

        <div className="Achievementsbtn">
          <div className="AllBtn">
            <button>All</button>
          </div>
          {/* <div className="CertificatesBtn">
            <button onClick={() => setType("Certificates")}>
              Certificates
            </button>
          </div>
          <div className="AwardsBtn">
            <button onClick={() => setType("Awards")}>Awards</button>
          </div> */}
        </div>

        <div className="cardDetail">
          {filteredCard.map((data, index) => (
            <div key={index} className="CardDetailAwards">
              <div className="Eventphoto">
                <img src={awards} alt="" />
              </div>
              <div className="EventHeading">
                <h5>{data.name}</h5>
              </div>
              <div className="EventYear">
                <p>{data.Year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
