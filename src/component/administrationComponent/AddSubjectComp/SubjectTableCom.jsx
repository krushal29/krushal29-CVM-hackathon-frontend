// import { useNavigate } from "react-router-dom";
import "./AddSubject.css";
import { useEffect, useState } from "react";
import AddSubjectComponent from './AddSubjectComponent'
import axios from "axios";
import Cookies from "js-cookie";

const SubjectTableCom = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [subjects,setSubject]=useState([]);
    const cook = Cookies.get("Token");
  



  useEffect(()=>{
    const data=async()=>{
      const res=await axios.get('https://cvmu3-0-iems.onrender.com/v1/subjects',{
        headers:{
          Authorization:cook
        }
      });

      console.log("res",res);
      setSubject(res.data.subjects);

    }
    data();
  },[showPopup])

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
                    <td>{subject.name}</td>
                    <td className="course-code">{subject.code}</td>
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
