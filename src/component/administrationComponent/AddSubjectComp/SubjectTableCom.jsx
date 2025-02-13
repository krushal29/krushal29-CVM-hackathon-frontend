import { useNavigate } from "react-router-dom";
import "./AddSubject.css";
import { useState } from "react";
import AddSubjectComponent from './AddSubjectComponent'

const SubjectTableCom = () => {
  const navigate=useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const subjects = [
    {
      subjectName: "Introduction to Computer Science",
      courseCode: "CS 101",
      credits: 4,
    },
    { subjectName: "Calculus I", courseCode: "MATH 101", credits: 3 },
    { subjectName: "English Composition", courseCode: "ENG 101", credits: 3 },
    { subjectName: "American History", courseCode: "HIST 101", credits: 3 },
    { subjectName: "Biology", courseCode: "BIOL 101", credits: 4 },
    { subjectName: "Art Appreciation", courseCode: "ART 101", credits: 3 },
    { subjectName: "Spanish I", courseCode: "SPAN 101", credits: 3 },
    { subjectName: "Music Theory", courseCode: "MUS 101", credits: 3 },
    { subjectName: "Theater", courseCode: "THR 101", credits: 3 },
  ];

  return (
    <div className="SubjectTable">
      <div className="SubjectTable1">
      <button 
      className="send-button"
      onClick={()=>setShowPopup(true)}
    >
      Add Subject
    </button>
    {showPopup && (
        <AddSubjectComponent 
        isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}


        <div className="subject-table-container">
          <div className="table-header">
            <div className="table-title">Subjects</div>
          </div>
          <div className="table-wrapper">
            <table className="subject-table">
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Course Code</th>
                  <th>Credits of Subject</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.subjectName}</td>
                    <td className="course-code">{subject.courseCode}</td>
                    <td className="credits">{subject.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectTableCom;
