import { useEffect, useState } from "react";
import "./DetailedAttendanceTable.css";
import Cookies from "js-cookie";
import axios from "axios";

const DetailedAttendanceTable = ({ onClose, subjectName ,subjectnameCode}) => {
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  console.log(student_id);

  console.log(cook);

  const [attendanceData,setattendanceData]=useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    return `${day}/${month}/${year}`;
  };


  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
  
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  
    return `${hours}:${minutes} ${amPm}`;
  };
  // const attendanceData = [
  //   { date: "01/01/22", time: "09:00 AM", status: "Present" },
  //   { date: "01/02/22", time: "10:30 AM", status: "Absent" },
  //   { date: "01/03/22", time: "02:00 PM", status: "Present" },
  //   { date: "01/01/22", time: "09:00 AM", status: "Present" },
  //   { date: "01/02/22", time: "10:30 AM", status: "Absent" },
  //   { date: "01/03/22", time: "02:00 PM", status: "Present" },
  //   { date: "01/01/22", time: "09:00 AM", status: "Present" },
  //   { date: "01/02/22", time: "10:30 AM", status: "Absent" },
  //   { date: "01/03/22", time: "02:00 PM", status: "Present" },
  //   { date: "01/01/22", time: "09:00 AM", status: "Present" },
  //   { date: "01/02/22", time: "10:30 AM", status: "Absent" },
  //   { date: "01/03/22", time: "02:00 PM", status: "Present" },
  // ];
  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `https://cvmu3-0-iems.onrender.com/v1/attendence/course/${subjectName}/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log("res", res.data.attendence_records);
      setattendanceData(res.data.attendence_records);
    };
    data();
  }, []);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{subjectnameCode}</h2>
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
                  <td>{formatDate(record.class_time)}</td>
                  <td>{formatTime(record.class_time)}</td>
                  <td>
                    <span
                      className={`status-pill ${record.present==true?"present":record.dont_care==true?"dont care".toLowerCase():"absent"}`}
                    >
                      {record.present==true?"present":record.dont_care==true?"dont care".toLowerCase():"absent"}
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
