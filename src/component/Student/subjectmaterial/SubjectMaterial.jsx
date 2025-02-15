import "./SubjectMaterial.css";
import { useEffect, useState } from "react";
import pdfLogo from "../../../assets/Vector - 0.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";

// const objAssignment = [
//   { Chapter: "Assignment 1: Kinematics", Date: "Due: Jan 15" },
//   { Chapter: "Assignment 2: Dynamics", Date: "Due: Jan 22" },
// ];

// const notesObj = [
//   { Chapter: "Lecture Notes: Newton's Laws", Date: "Updated: Jan 5" },
//   { Chapter: "Lecture Notes: Energy", Date: "Updated: Jan 10" },
// ];

// const syllabusObj = [
//   { Chapter: "Syllabus: Semester 1", Date: "Updated: Jan 1" },
//   { Chapter: "Syllabus: Semester 2", Date: "Updated: Jan 15" },
// ];

// const lecturesObj = [
//   { Chapter: "Lecture 1: Introduction", Date: "Available: Jan 5" },
//   { Chapter: "Lecture 2: Database Models", Date: "Available: Jan 10" },
// ];

const SubjectMaterial = () => {
  const {id}=useParams();
  console.log(id);
  
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Lectures Notes");
  const [data,setData] =useState([]);

  // Reusable function to display documents

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/resources/subject/${id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(response.data.resources);
      setData(response.data.resources);
    };
    data();
  }, []);
  const renderDocuments = (dataArray, title) => (
    <div>
      <h2 style={{ marginTop: "20px", fontWeight: "600" }}>{title}</h2>
      <div className="Document">
        {dataArray.map((data, index) => (
          <div key={data.id} className="DocumentpdfDetail">
            <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3 style={{ fontWeight: "450", fontSize: "15px" }}>
                    {data.title}
                  </h3>
                </div>
                <div className="DocumentLastDate">
                  <p style={{ color: "#272757", fontSize: "14px" }}>
                    {data.date}
                  </p>
                </div>
              </div>
            </div>
            <div className="DocumentDownload">
             <a href={`https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/${data.docs_id}`}> <button>Download File</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Function to get filtered content based on the selected tab
  const getFilteredContent = () => {
    let filteredData = [];
  
    // if (activeTab === "Overview") {
    //   return (
    //     <div>
    //       {renderDocuments(data.filter((item) => item.type === "lecture"), "Lectures")}
    //       {renderDocuments(data.filter((item) => item.type === "assignment"), "Assignments")}
    //       {renderDocuments(data.filter((item) => item.type === "note"), "Notes")}
    //       {renderDocuments(data.filter((item) => item.type === "syllabus"), "Syllabus")}
    //     </div>
    //   );
    // }
  
    // Mapping tabs to resource types
    const typeMapping = {
      "Lectures Notes": "lecture_notes",
      "LAB MANUAL": "lab_manual",
      "BOOKS": "books",
      "REFERENCE MATERIAL": "reference_material",
      "SYLLABUS": "syllabus",
      "OTHERS": "others"
    };
    
  
    // Filter data based on the active tab
    if (typeMapping[activeTab]) {
      filteredData = data.filter((item) => item.type === typeMapping[activeTab]);
    }
  
    return renderDocuments(filteredData, activeTab);
  };

  // const response1 = await axios.post(
  //   `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements/status/${id}`,
  //   JSON.stringify({
  //     status: status,
  //   }),
  //   {
  //     headers: {
  //       Authorization: `Bearer ${cook}`,
  //     },
  //   }
  // );

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
              {["Lectures Notes","LAB MANUAL","BOOKS","REFERENCE MATERIAL","SYLLABUS","OTHERS"].map(
                (tab) => (
                  <li
                    key={tab}
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                )
              )}
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
