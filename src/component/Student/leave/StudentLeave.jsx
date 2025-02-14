import { useState } from "react";
import "./StudentLeave.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

//icons

const StudentLeave = () => {
  const navigate=useNavigate();
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const [formData, setFormData] = useState({
    StartDate: "",
    endDate: "",
    Reason: "",
    file: null,
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    // setFormData({ ...formData, offerLetter: e.target.files[0] });
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setFormData((prev) => ({
        ...prev,
        offerLetter: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };



  const handleSubmit = async (e) => {
    const response = await axios.post(
      "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/leave/",
      JSON.stringify({
        student_id:student_id,
        from_date:formData.StartDate,
        to_date:formData.endDate,
        reason:formData.Reason,
        document_id:formData.offerLetter
      }),
      { headers: { Authorization:cook } }
    );


    console.log("response",response);

    if(response.data){
      navigate('/StudentLeave');
    }
    
  };

  return (
    <div className="StudentLeave">
      <div className="StudentLeave1">
        <div className="ApplyLeave">
          <div className="ApplyLeaveH3">
            <h3>Apply Leave</h3>
          </div>
          <div className="ApplyStartDate">
            <p>Start date</p>
            <input
              name="StartDate"
              value={formData.StartDate}
              type="date"
              onChange={handleChange}
            />
          </div>
          <div className="ApplyEndDate">
            <p>End Date</p>
            <input
              name="endDate"
              value={formData.endDate}
              type="date"
              onChange={handleChange}
            />
          </div>
          <div className="ApplyReasonLeave">
            <p>Reason for Leave</p>
            <textarea
              id=""
              name="Reason"
              value={formData.Reason}
              placeholder="Enter reason for leave."
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="ApplyApplication">
            <p>Application :</p>
            <div className="form-group">
              <label>Upload Offer Letter</label>
              <input
                type="file"
                name="file_upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <div className="submitbtn">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLeave;
