import "./Placement.css";
import { useState } from "react";
import PlacementForm from "./PlacementForm";

const StudentTable = () => {
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
