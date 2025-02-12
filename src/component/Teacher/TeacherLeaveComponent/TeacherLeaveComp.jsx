import React from 'react';
import './TeacherLeave.css';

const TeacherLeaveComp = () => {
  const columnNames = {
    applicationNumber: 'Application Number',
    name: 'Name',
    branch: 'Branch',
    dateOfApplication: 'Date of Application',
    numberOfDays: 'Number of Days',
    reasonForLeave: 'Reason for Leave',
    actions: 'Actions'
  };

  const applications = [
    {
      applicationNumber: '2023001',
      name: 'Lily Smith',
      branch: 'Computer Science',
      dateOfApplication: '01/01/2023',
      numberOfDays: 5,
      reasonForLeave: 'Family emergency',
      status: 'Pending'
    },
    {
      applicationNumber: '2023002',
      name: 'Tom Johnson',
      branch: 'Business',
      dateOfApplication: '01/02/2023',
      numberOfDays: 2,
      reasonForLeave: 'Personal reasons',
      status: 'Pending'
    },
    {
      applicationNumber: '2023003',
      name: 'Sara Davis',
      branch: 'Mathematics',
      dateOfApplication: '01/03/2023',
      numberOfDays: 4,
      reasonForLeave: 'Medical',
      status: 'Pending'
    },
    {
      applicationNumber: '2023004',
      name: 'Mike Brown',
      branch: 'Art',
      dateOfApplication: '01/04/2023',
      numberOfDays: 1,
      reasonForLeave: 'Vacation',
      status: 'Pending'
    },
    {
      applicationNumber: '2023005',
      name: 'Emma Wilson',
      branch: 'Biology',
      dateOfApplication: '01/05/2023',
      numberOfDays: 5,
      reasonForLeave: 'Family holiday',
      status: 'Pending'
    }
  ];

  // const handleAction = (applicationNumber, action) => {
  //   console.log(Application ${applicationNumber} ${action});
  // };

  return (
    <div className="leave-applications-container">
      <h2 className="table-title" style={{fontSize:"25px"}}>Leave Applications</h2>
      <div className="table-wrapper">
        <table className="leave-table">
          <thead>
            <tr>
              {Object.values(columnNames).map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.applicationNumber}>
                <td>{app.applicationNumber}</td>
                <td>{app.name}</td>
                <td>{app.branch}</td>
                <td>{app.dateOfApplication}</td>
                <td>{app.numberOfDays}</td>
                <td>{app.reasonForLeave}</td>
                <td>
                  <select
                    className="action-select"
                    onChange={(e) => handleAction(app.applicationNumber, e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select Action</option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherLeaveComp;