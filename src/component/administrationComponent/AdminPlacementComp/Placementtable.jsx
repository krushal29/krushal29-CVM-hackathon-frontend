import "./Placement.css";
import { useEffect, useState } from "react";
import PlacementForm from "./PlacementForm";
import Cookies from "js-cookie";
import axios from "axios";

const StudentTable = () => {
  const cook = Cookies.get("Token");
  const [offes,setOffers]=useState([]);

  // const response1 = await axios.post(
  //   `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements`,
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
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      setOffers(resopse1.data);
      console.log(resopse1);
      
    };
    data();
  },[]);

  const [showPopup, setShowPopup] = useState(false);
  const data = [
    {
      student: "Jane Doe",
      enrollment: "2022-1",
      company: "Google",
      offer: "$150,000",
      status: "Accepted",
    },
    {
      student: "Jack Smith",
      enrollment: "2022-2",
      company: "Facebook",
      offer: "$140,000",
      status: "Pending",
    },
    {
      student: "Jill Johnson",
      enrollment: "2022-3",
      company: "Amazon",
      offer: "$130,000",
      status: "Declined",
    },
    {
      student: "Joe Davis",
      enrollment: "2022-4",
      company: "Microsoft",
      offer: "$120,000",
      status: "Accepted",
    },
    {
      student: "Jessica Lee",
      enrollment: "2022-5",
      company: "Apple",
      offer: "$110,000",
      status: "Pending",
    },
  ];

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
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.student}</td>
                <td>{row.enrollment}</td>
                <td>{row.company}</td>
                <td>{row.offer}</td>
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
