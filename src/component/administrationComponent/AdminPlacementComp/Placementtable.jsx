import "./Placement.css";
import { useEffect, useState } from "react";
import PlacementForm from "./PlacementForm";
import Cookies from "js-cookie";
import axios from "axios";

const StudentTable = () => {
  const cook = Cookies.get("Token");
  const [offes,setOffers]=useState([]);

  // const response1 = await axios.post(
  //   `https://cvmu3-0-iems.onrender.com/v1/placements`,
  //   JSON.stringify({
  //     student_id,
  //     company_name:formData.companyName,
  //     package:formData.offerPackage,
  //     letter_uid:formData.offerLetter,
  //     role:""
  //   }),
  //   {
  //     headers: {
  //       Authorization: `Bearer ${cook}`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  useEffect(() => {
    const data = async () => {
      const resopse1 = await axios.get(
        `https://cvmu3-0-iems.onrender.com/v1/placements`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      setOffers(resopse1.data.placements);
      console.log(resopse1.data.placements);
    };
    data();
  },[]);

  const [showPopup, setShowPopup] = useState(false);


  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "accepted":
        return "status-accepted";
      case "pending":
        return "status-pending";
      case "declined":
        return "status-declined";
      default:
        return "";
    }
  };

  return (
    <div className="PlacementAdmin">
      <div className="PlacementAdmin1">
        <button className="send-button" onClick={() => setShowPopup(true)}>
          Send Placement Details
        </button>

        {showPopup && <PlacementForm onClose={() => setShowPopup(false)} />}

        <table className="student-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Enrollment</th>
              <th>Company</th>
              <th>Offer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {offes.map((row, index) => (
              <tr key={index}>
                <td>{row.first_name}</td>
                <td>{row.enrollment_id}</td>
                <td>{row.company_name}</td>
                <td>{row.package}</td>
                <td>
                  <span className={`status ${getStatusStyle(row.status)}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
