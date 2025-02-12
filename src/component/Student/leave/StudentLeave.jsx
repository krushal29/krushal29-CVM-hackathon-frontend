import { useState } from "react";
import "./StudentLeave.css";

//icons

import { useNavigate } from "react-router-dom";



const StudentLeave = () => {
  const [StartDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [Reason, setReason] = useState("");
const navigate=useNavigate();

  console.log(StartDate, endDate, Reason);



  return (
    <div className="StudentLeave">
      <div className="StudentLeave1">
        <div className="ApplyLeave">
          <div className="ApplyLeaveH3">
            <h3>Apply Leave</h3>
          </div>
          <div className="ApplyStartDate">
            <p>Start date</p>
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="ApplyEndDate">
            <p>End Date</p>
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="ApplyReasonLeave">
            <p>Reason for Leave</p>
            <textarea
              name=""
              id=""
              placeholder="Enter reason for leave."
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <div className="ApplyApplication">
            <p>Application :</p>
            <input type="file" />
          </div>
          <div className="submitbtn">
            <button>Submit</button>
          </div>
        </div>

        <div className="ViewPastApplication">
          <button onClick={()=>navigate('/viewLeaveApplication')}>Past Application</button>
        </div>

       
      </div>
    </div>
  );
};

export default StudentLeave;
