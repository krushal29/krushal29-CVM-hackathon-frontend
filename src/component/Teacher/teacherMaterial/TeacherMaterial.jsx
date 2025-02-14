import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./TeacherMaterial.css";
import { useNavigate } from "react-router-dom";

const lectures = [
  { title: "Introduction to Web Design", date: "Jan 15, 2023" },
  { title: "HTML and CSS Basics", date: "Jan 20, 2023" },
  { title: "Intermediate HTML and CSS", date: "Jan 25, 2023" },
  { title: "Introduction to JavaScript", date: "Jan 30, 2023" },
  { title: "Advanced JavaScript", date: "Feb 5, 2023" },
  { title: "Introduction to React", date: "Feb 10, 2023" },
  { title: "Advanced React", date: "Feb 15, 2023" },
  { title: "Introduction to Node.js", date: "Feb 20, 2023" },
  { title: "Advanced Node.js", date: "Feb 25, 2023" },
  { title: "Final Project Presentations", date: "Mar 1, 2023" },
];

const TeacherMaterial = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();

  const filteredLectures = lectures.filter((lecture) =>
    lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="TeacherMaterial">
      <div className="TeacherMaterial1">
        <div className="TeacherMaterial2">
          <div className="TeacherMaterialh2">
            <h2 style={{color:"#272757",fontSize:"25px"}}>Materials</h2>
          </div>
          <div className="TeacherMaterialAdd">
            <button onClick={()=>navigate('/UploadMaterial/addMaterial')} style={{backgroundColor:"#272757"}}>Add Material</button>
          </div>
        </div>
        <div className="MaterialsInput">
          <span>
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search materials"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="container">
          <table className="lecture-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Subject</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {filteredLectures.length > 0 ? (
                filteredLectures.map((lecture, index) => (
                  <tr key={index}>
                    <td>{lecture.title}</td>
                    <td>Web Development</td>
                    <td>{lecture.date}</td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-results">
                    No materials found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherMaterial;
