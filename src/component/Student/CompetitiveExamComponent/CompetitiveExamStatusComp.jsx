import { useLocation, useNavigate } from "react-router-dom";
import "./CompetitiveExam.css";

const CompetitiveExamStatusComp = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const data = [
    {
      serial: 1,
      seat: "A1",
      exam: "Mathematics",
      rank: "",
      preview: "Preview",
    },
    {
      serial: 2,
      seat: "A2",
      exam: "Science",
      rank: "Air 23",
      preview: "Preview",
    },
    {
      serial: 3,
      seat: "A3",
      exam: "English",
      rank: "Right",
      preview: "Preview",
    },
    {
      serial: 4,
      seat: "A4",
      exam: "French",
      rank: "Centre",
      preview: "Preview",
    },
    { serial: 5, seat: "A5", exam: "Art", rank: "Left", preview: "Preview" },
  ];

  return (
    <div className="competitiveExam">
      <div className="competitiveExam1">
        {location.pathname != "/PCompetitiveExam" && (
          <div className="Form">
            <button onClick={() => navigator("/CompetitiveExamForm")}>
              Form
            </button>
          </div>
        )}
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Seat No.</th>
                <th>Exam Name</th>
                <th>Rank</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.serial}>
                  <td>{row.serial}</td>
                  <td>{row.seat}</td>
                  <td>{row.exam}</td>
                  <td>{row.rank}</td>
                  <td className="preview">{row.preview}</td>
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
