import "./attendence.css";
import { useEffect, useState } from "react";
import DetailedAttendanceTable from "./DetailedAttendanceTable";
import Cookies from "js-cookie";
import axios from "axios";

const Attendance = () => {
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  console.log(student_id);

  console.log(cook);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [data, setData] = useState([]);
const [subject,setSubject]=useState();

console.log(subject);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `https://cvmu3-0-iems.onrender.com/v1/attendence/student/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(res.data.attendence_records);
      setData(res.data.attendence_records);
    };
    data();
  }, [student_id, cook]);

  const handleAttendence = async (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="StudentAttendance">
      <div className="AttendenceDetail">
        <h1>Attendance Sheet</h1>

        <table className="AttendanceTable">
          <thead>
            <tr>
              <th>Course code</th>
              <th>Subject</th>
              {/* <th>From</th> */}
              {/* <th>To</th> */}
              <th>dont care</th>
              <th>Attended</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.course_code}</td>
                <td>{item.course_name}</td>
                {/* <td>{item.From}</td> */}
                {/* <td>{item.To}</td> */}
                <td>{item.dont_care_no}</td>
                <td>{item.present_no}</td>
                <td>{item.total_no}</td>
                <td>
                  {(
                    (parseFloat(item.present_no+item.dont_care_no) / parseFloat(item.total_no)) *
                    100
                  ).toFixed(2)}
                  %
                </td>
                <td>
                  <a
                    href="#"
                    className="view-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubject(item.course_id);
                      handleAttendence(e);
                      setSubject(item.course_name);
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
          subjectnameCode={subject}
            subjectName={selectedSubject}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Attendance;
