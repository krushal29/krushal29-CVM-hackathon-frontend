import { useLocation, useNavigate } from "react-router-dom";
import "./CompetitiveExam.css";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const CompetitiveExamStatusComp = () => {
  const navigator = useNavigate();

  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      console.log(cook);

      const response1 = await axios.get(
        `https://cvmu3-0-iems.onrender.com/v1/external_exams/student/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(response1.data.external_exams);
      setData(response1.data.external_exams);
    };
    data();
  }, []);

  return (
    <div className="competitiveExam">
      <div className="competitiveExam1">
        {location.pathname != "/PCompetitiveExam" && (
          <div className="Form">
            <button onClick={() => navigator("/CompetitiveExamForm")}>
              Exam Details
            </button>
          </div>
        )}
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Seat No.</th>
                <th>Year of Apperance</th>
                <th>Score</th>
                <th>Rank</th>
                <th>View marksheet</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.seat_no}</td>
                  <td>{row.yoa}</td>
                  <td>{row.score}</td>
                  <td>{row.rank}</td>
                  {/* <td className="preview">{row.marksheet_uuid}</td> */}
                  <td>
                    {" "}
                    <a
                      href={`https://cvmu3-0-iems.onrender.com/v1/files/${row.marksheet_uuid}`}
                    >
                      view
                    </a>
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

export default CompetitiveExamStatusComp;
