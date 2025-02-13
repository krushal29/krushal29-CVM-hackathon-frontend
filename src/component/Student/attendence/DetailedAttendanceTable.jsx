import React from "react";
import "./DetailedAttendanceTable.css";

const DetailedAttendanceTable = ({ onClose, subjectName }) => {
  const attendanceData = [
    { date: "01/01/22", time: "09:00 AM", status: "Present" },
    { date: "01/02/22", time: "10:30 AM", status: "Absent" },
    { date: "01/03/22", time: "02:00 PM", status: "Present" },
    { date: "01/01/22", time: "09:00 AM", status: "Present" },
    { date: "01/02/22", time: "10:30 AM", status: "Absent" },
    { date: "01/03/22", time: "02:00 PM", status: "Present" },
    { date: "01/01/22", time: "09:00 AM", status: "Present" },
    { date: "01/02/22", time: "10:30 AM", status: "Absent" },
    { date: "01/03/22", time: "02:00 PM", status: "Present" },
    { date: "01/01/22", time: "09:00 AM", status: "Present" },
    { date: "01/02/22", time: "10:30 AM", status: "Absent" },
    { date: "01/03/22", time: "02:00 PM", status: "Present" },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{subjectName}</h2>
          <span className="close-icon" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="attendance-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.time}</td>
                  <td>
                    <span className={`status-pill ${record.status.toLowerCase()}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedAttendanceTable;
