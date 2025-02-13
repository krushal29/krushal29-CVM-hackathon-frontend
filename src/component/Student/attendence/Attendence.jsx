import "./attendence.css";
import React, { useState } from "react";
import DetailedAttendanceTable from "./DetailedAttendanceTable";

const data = [
  {
    SubjectName: "DBMS",
    CourseCode: "#2123123",
    From: "21/07/24",
    To: "21/07/24",
    TotalDays: 100,
    PresentDays: 70,
  },
  {
    SubjectName: "DSA",
    CourseCode: "#2123123",
    From: "21/07/24",
    To: "21/07/24",
    TotalDays: 100,
    PresentDays: 70,
  },
  {
    SubjectName: "DF",
    CourseCode: "#2123123",
    From: "21/07/24",
    To: "21/07/24",
    TotalDays: 100,
    PresentDays: 70,
  },
  
  {
    SubjectName: "OS",
    CourseCode: "#2123123",
    From: "21/07/24",
    To: "21/07/24",
    TotalDays: 100,
    PresentDays: 70,
  },
  {
    SubjectName: "JAVA",
    CourseCode: "#2123123",
    From: "21/07/24",
    To: "21/07/24",
    TotalDays: 9,
    PresentDays: 7,
  },
];

const Attendance = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  return (
    <div className="StudentAttendance">
      <div className="AttendenceDetail">
        <h1>Attendance Sheet</h1>

        <table className="AttendanceTable">
          <thead>
            <tr>
              <th>Course code</th>
              <th>Subject</th>
              <th>From</th>
              <th>To</th>
              <th>Attended</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.CourseCode}</td>
                <td>{item.SubjectName}</td>
                <td>{item.From}</td>
                <td>{item.To}</td>
                <td>{item.PresentDays}</td>
                <td>{item.TotalDays}</td>
                <td>
                  {((parseFloat(item.PresentDays) / parseFloat(item.TotalDays)) * 100).toFixed(2)}%
                </td>
                <td>
                  <a
                    href="#"
                    className="view-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubject(item.SubjectName);
                      setShowModal(true);
                    }}
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <DetailedAttendanceTable
            subjectName={selectedSubject}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Attendance;
