import "./SubjectMaterial.css";
import { useState } from "react";
import pdfLogo from "../../../assets/Vector - 0.png";

const objAssignment = [
  { Chapter: "Assignment 1: Kinematics", Date: "Due: Jan 15" },
  { Chapter: "Assignment 2: Dynamics", Date: "Due: Jan 22" },
];

const notesObj = [
  { Chapter: "Lecture Notes: Newton's Laws", Date: "Updated: Jan 5" },
  { Chapter: "Lecture Notes: Energy", Date: "Updated: Jan 10" },
];

const syllabusObj = [
  { Chapter: "Syllabus: Semester 1", Date: "Updated: Jan 1" },
  { Chapter: "Syllabus: Semester 2", Date: "Updated: Jan 15" },
];

const lecturesObj = [
  { Chapter: "Lecture 1: Introduction", Date: "Available: Jan 5" },
  { Chapter: "Lecture 2: Database Models", Date: "Available: Jan 10" },
];



const SubjectMaterial = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Reusable function to display documents
  const renderDocuments = (dataArray, title) => (
    <div>
      <h2 style={{marginTop:"20px",fontWeight:"600"}}>{title}</h2>
      <div className="Document">
        {dataArray.map((data, index) => (
          <div key={index} className="DocumentpdfDetail">
            <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3 style={{fontWeight:"450",fontSize:"15px"}}>{data.Chapter}</h3>
                </div>
                <div className="DocumentLastDate">
                  <p style={{color:"#272757",fontSize:"14px"}}>{data.Date}</p>
                </div>
              </div>
            </div>
            <div className="DocumentDownload">
              <button>Download File</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Function to get filtered content based on the selected tab
  const getFilteredContent = () => {
    if (activeTab === "Overview") {
      return (
        <div>
          {renderDocuments(lecturesObj, "Lectures")}
          {renderDocuments(objAssignment, "Assignments")}
          {renderDocuments(notesObj, "Notes")}
          {renderDocuments(syllabusObj, "Syllabus")}
        </div>
      );
    } else if (activeTab === "Lectures") {
      return renderDocuments(lecturesObj, "Lectures");
    } else if (activeTab === "Assignments") {
      return renderDocuments(objAssignment, "Assignments");
    } else if (activeTab === "Notes") {
      return renderDocuments(notesObj, "Notes");
    } else if (activeTab === "Syllabus") {
      return renderDocuments(syllabusObj, "Syllabus");
    }
    return null;
  };

  return (
    <div className="SubjectMaterial">
      <div className="SubjectMaterial1">
        <div className="navbarFixed">
          <div className="SubjectMaterialPath">
            <p>
              <span>Subject /</span> DBMS
            </p>
          </div>
          <div className="SubjectMaterialSubject">
            <h1>DBMS</h1>
          </div>
          <div className="SubjectProfessor">
            <p>Dr. A. Einstein</p>
          </div>
          <div className="SubjectMaterialNavbar">
            <ul>
              {["Overview", "Lectures", "Assignments", "Notes", "Syllabus"].map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="SubjectMaterialDetail">

          <div className="Document">{getFilteredContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default SubjectMaterial;
