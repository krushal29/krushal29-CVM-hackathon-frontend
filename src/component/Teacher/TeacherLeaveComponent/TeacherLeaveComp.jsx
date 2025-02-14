import { useEffect, useState } from "react";
import "./TeacherLeave.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TeacherLeaveComp = () => {
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const navigate = useNavigate();
  console.log(student_id);
  const [statuses, setStatuses] = useState({});

  const columnNames = {
    // applicationNumber: 'Application Number',
    name: "Name",
    // branch: 'Branch',
    // dateOfApplication: 'Date of Application',
    FormData: "Form date",
    ToDate: "To date",
    // numberOfDays: 'Number of Days',
    reasonForLeave: "Reason for Leave",
    ViewDocument: "View Document",
    actions: "Actions",
  };

  const [applications, setApplication] = useState([]);

  const handleAction = async(applicationNumber, action) => {
    console.log(`Application ${applicationNumber} ${action}`);
    setStatuses((prev) => ({ ...prev, [applicationNumber]: status }));
    console.log(applicationNumber);
    console.log(cook);

    const response1 = await axios.patch(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/leave/${applicationNumber}/status`,
      JSON.stringify({
        accepted:(action=="accept"?true:false),
      }),
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log("reso1", response1);



      const resopse= await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/leave/pending`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
    setApplication(resopse.data.leaves);
    console.log("reso", resopse);
  };

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/leave/pending",
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log("res", response.data.leaves);
      setApplication(response.data.leaves);
    };
    data();
  }, []);

  return (
    <div className="leave-applications-container">
      <h2 className="table-title" style={{ fontSize: "25px" }}>
        Leave Applications
      </h2>
      <div className="table-wrapper">
        <table className="leave-table">
          <thead>
            <tr>
              {Object.values(columnNames).map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                {/* <td>{app.applicationNumber}</td> */}
                <td>{app.student_name}</td>
                <td>{app.from_date}</td>
                <td>{app.to_date}</td>
                <td>{app.reason}</td>
                <td>
                  <a
                    href={`https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/${app.document_id}`}
                  >
                    <button>View Document</button>
                  </a>
                </td>
                <td>
                  <select
                    className="action-select"
                    onChange={(e) =>
                      handleAction(app.id, e.target.value)
                    }
                    value={statuses[app.id] || ""}
                  >
                    <option value="" disabled>
                      Select Action
                    </option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherLeaveComp;
