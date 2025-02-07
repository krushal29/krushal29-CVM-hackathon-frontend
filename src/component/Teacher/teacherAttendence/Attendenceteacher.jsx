import { useState } from "react";
import "./Attendenceteacher.css";

const subjects = ["Advance Java", "DBMS", "Python"];
const sections = ["A", "B", "C", "D"];

const studentDetails = [
  { Name: "Krushal", StudentId: "12302040501027", Status: "Absent" },
  { Name: "John Doe", StudentId: "12302040501028", Status: "Absent" },
  { Name: "Jane Smith", StudentId: "12302040501029", Status: "Absent" },
];

const Attendenceteacher = () => {
  const [checkedStudents, setCheckedStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [date, setDate] = useState("");

  console.log(subject, section, date);

  const handleCheckboxChange = (studentId) => {
    setCheckedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setCheckedStudents(studentDetails.map((student) => student.StudentId));
    } else {
      setCheckedStudents([]);
    }
  };

  return (
    <div className="Attendenceteacher">
      <div className="Attendenceteacher1">
        <div className="Attendenceteacherh3">
          <h3>Attendance</h3>
        </div>

        <div className="selectAttendence">
          <div className="AttendenceSubject">
            <label>Subject</label>
            <select onChange={(e) => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="SectionAttendence">
            <label>Section</label>
            <select onChange={(e) => setSection(e.target.value)}>
              <option value="">Select Section</option>
              {sections.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
          <div className="DateAttendence">
            <label>Date</label>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="GenerateSheet">
            <button>Generate Sheet</button>
          </div>
        </div>

        <div className="AttendenceSheet">
          <h3>Attendance Sheet</h3>
          <div className="AttendenceSheetHeading">
            <div className="AttendenceSheetHeading1">
              <input type="checkbox" onChange={handleSelectAll} />
              <p>#</p>
              <p>Student Name</p>
              <p>Student ID</p>
              <p>Status</p>
            </div>
          </div>
          <div className="AttendenceStudentDetail">
            {studentDetails.map((student, index) => (
              <div key={student.StudentId} className="AttendenceStudentDetail1">
                <input
                  type="checkbox"
                  checked={checkedStudents.includes(student.StudentId)}
                  onChange={() => handleCheckboxChange(student.StudentId)}
                />
                <p>{index + 1}</p>
                <p>{student.Name}</p>
                <p>{student.StudentId}</p>
                <p>{checkedStudents.includes(student.StudentId) ? "Present" : "Absent"}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="submitBtn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Attendenceteacher;
