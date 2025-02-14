import { useState } from 'react';
import "./StudentLeave.css";
import { useNavigate } from 'react-router-dom';

// const obj = [
//   {
//     from: "Dec 15, 2022",
//     to: "Dec 17, 2022",
//     reason: "Family emergency",
//     status: "Pending"
//   },
//   {
//     from: "Nov 5, 2022",
//     to: "Nov 7, 2022",
//     reason: "Illness",
//     status: "Declined"
//   },
//   {
//     from: "Sep 1, 2022",
//     to: "Sep 3, 2022",
//     reason: "Religious holiday",
//     status: "Accepted"
//   },
//   {
//     from: "Jul 20, 2022",
//     to: "Jul 22, 2022",
//     reason: "Personal reasons",
//     status: "Accepted"
//   }
// ];

const ViewStudentLeave = () => {
  const navigate = useNavigate();

  return (
    <div className='past-application-wrapper'>
      <div className="past-application-container">
        <div className="application-header">
          <h3>Fee Status</h3>
        </div>
        <div className="centerTable">
          <div className="table-container">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>date</th>
                  <th>Payment Type</th>
                  <th>Fee Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {obj.map((value, index) => (
                  <tr key={index}>
                    <td>{value.from}</td>
                    <td>{value.to}</td>
                    <td>{value.reason}</td>
                    <td>
                      <span className={`status-badge ${value.status.toLowerCase()}`}>
                        {value.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="apply-leave-button">
          <button onClick={() => navigate('/viewLeaveApplication')}>Apply Leave</button>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentLeave;