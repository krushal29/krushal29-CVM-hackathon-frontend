import { useEffect, useState } from "react";
import "./Attendenceteacher.css";
import Cookies from "js-cookie";
import axios from "axios";

const subjects = ["Advance Java", "DBMS", "Python"];
const sections = ["A", "B", "C", "D"];

const studentDetails = [
  { Name: "Krushal", StudentId: "12302040501027", Status: "Absent" },
  { Name: "John Doe", StudentId: "12302040501028", Status: "Absent" },
  { Name: "Jane Smith", StudentId: "12302040501029", Status: "Absent" },
];

const Attendenceteacher = () => {
  const [subjectBranch, setSubjectBranch] = useState([]);
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  console.log(student_id);
  console.log(cook);
  const [checkedStudents, setCheckedStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [date, setDate] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [GenerateSheet, setGenerateSheet] = useState([]);

  console.log(subject, section, date);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/courses/teacher/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(response);
      setSubjectBranch(response.data.courses);
    };
    data();
  }, []);

  const handleCheckboxChange = (studentId) => {
    setCheckedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setCheckedStudents(GenerateSheet.map((student) => student.id));
    } else {
      setCheckedStudents([]);
    }
  };
  console.log(checkedStudents);

  const submitAttendence = async (e) => {
    const AbsentIDs = allStudent.filter(
      (studentId) => !checkedStudents.includes(studentId)
    );
    console.log("Present Students:", checkedStudents);
    console.log("Absent Students:", AbsentIDs);

    const response = await axios.post(
      "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/attendence/mark",
      JSON.stringify({
          course_id:subject,
          class_time:date,
          present_student_ids:checkedStudents,
          absent_student_ids:AbsentIDs
      }),
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log(response.data);
  };
  
  const handleSheet = async () => {
    const response = await axios.get(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students/course/${subject}`,
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log(response.data);
    setGenerateSheet(response.data.students);
    const studentIds = response.data.students.map((student) => student.id);
    setAllStudent(studentIds);
    console.log("allStudent", allStudent);
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
              {subjectBranch.map((subject, index) => (
                <option key={subject.id} value={subject.id}>
                  {subject.branch}-{subject.year}/{subject.name}
                </option>
              ))}
            </select>
          </div>
          <div className="DateAttendence">
            <label>Date</label>
            <input
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="GenerateSheet">
            <button onClick={handleSheet}>Generate Sheet</button>
          </div>
        </div>

        <div className="AttendenceSheet">
          <h3 style={{ paddingBottom: "20px", color: "#272757" }}>
            Attendance Sheet
          </h3>
          <div className="AttendenceSheetHeading">
            <div className="AttendenceSheetHeading1">
              <input type="checkbox" onChange={handleSelectAll} />
              <p>serial Number </p>
              <p>Student Name</p>
              <p>Student ID</p>
            </div>
          </div>
          <div className="AttendenceStudentDetail">
            {GenerateSheet.map((student, index) => (
              <div
                key={student.id}
                className={`AttendenceStudentDetail1 ${
                  checkedStudents.includes(student.id) ? "checked-row" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedStudents.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
                <p>{index + 1}</p>
                <p>{student.name}</p>
                <p>{student.enrollment_id}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="submitBtn">
          <button onClick={submitAttendence}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Attendenceteacher;
