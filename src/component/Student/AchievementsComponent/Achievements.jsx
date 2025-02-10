import "./Achievements.css";

import awards from "../../../assets/Depth 7, Frame.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const obj = [
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Awards",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Certificates",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Certificates",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Certificates",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Certificates",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Certificates",
  },
  {
    img: awards,
    Heading: "First place, Science Fair",
    Year: "2023",
    type: "Awards",
  },
];

const Achievements = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("All");
  const [card, setcard] = useState(obj);
  console.log(type);
  

  useEffect(() => {
    if (type == "Certificates") {
      setcard(obj.filter((data) => data.type === "Certificates"));
    } else if (type == "Awards") {
      setcard(obj.filter((data) => data.type === "Awards"));
    } else setcard(obj);
  }, [type]);

  return (
    <div className="Achievements">
      <div className="Achievements1">
        <div className="AchievementsHeading">
          <div className="Achievementsh3">
            <h3>Your Achievements</h3>
          </div>
          <div className="AchievementsAddbtn">
            <button onClick={() => navigate("/Achievements/FormPage")}>
              Add
            </button>
          </div>
        </div>

        <div className="Achievementsbtn">
          <div className="AllBtn">
            <button onClick={() => setType("All")}>All</button>
          </div>
          <div className="CertificatesBtn">
            <button onClick={() => setType("Certificates")}>
              Certificates
            </button>
          </div>
          <div className="AwardsBtn">
            <button onClick={() => setType("Awards")}>Awards</button>
          </div>
        </div>

        <div className="cardDetail">
          {card.map((data, index) => (
            <div key={index} className="CardDetailAwards">
              <div className="Eventphoto">
                <img src={data.img} alt="" />
              </div>
              <div className="EventHeading">
                <h5>{data.Heading}</h5>
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
