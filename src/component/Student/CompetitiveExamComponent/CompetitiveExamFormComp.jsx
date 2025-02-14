import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompetitiveExamFormComp = () => {
  const navigate=useNavigate();
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  // State to manage form data
  const [formData, setFormData] = useState({
    examScore: "",
    ExamName:"",
    examSeatNumber: "",
    yearOfAppearance: "",
    examPosition: "",
    file: null, // Added file field
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
console.log(formData);

  // Handle file selection
  const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setFormData((prev) => ({
        ...prev,
        file: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Create FormData to send both file and text fields

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/external_exams",
        JSON.stringify({
          student_id: student_id,
          name:formData.ExamName,
          score:formData.examScore,
          seat_no:formData.examSeatNumber,
          yoa:formData.yearOfAppearance,
          marksheet_uuid:formData.file,
          rank:formData.examPosition
        }),
        { headers: { Authorization: `Bearer ${cook}` } }
      );

      console.log("Response:", response.data);
      // alert("Exam details submitted successfully!");
      navigate('/CompetitiveExam');
    } catch (error) {
      console.error("Submission failed", error);
      // alert("Failed to submit exam details.");
    }
  };

  return (
    <div className="CompetitiveForm">
      <div className="CompetitiveForm1">
        <div className="form-container">
          <h2 className="form-title">Add Marks</h2>
          <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
            

            <label>Exam Name</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Name"
              name="ExamName"
              value={formData.ExamName}
              onChange={handleChange}
            />

            <label>Exam Score</label>
            <input
              type="number"
              className="pure-input-1"
              placeholder="Enter Score"
              name="examScore"
              value={formData.examScore}
              onChange={handleChange}
            />

            <label>Exam Seat Number</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Seat No."
              name="examSeatNumber"
              value={formData.examSeatNumber}
              onChange={handleChange}
            />

            <label>Year of Appearance</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Year"
              name="yearOfAppearance"
              value={formData.yearOfAppearance}
              onChange={handleChange}
            />

            <label>Exam Position</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Position"
              name="examPosition"
              value={formData.examPosition}
              onChange={handleChange}
            />

            <label>Upload Marksheet</label>
            <input
              type="file"
              className="pure-button pure-button-primary btn-submit"
              onChange={handleFileChange}
            />
            <button
              type="submit"
              className="pure-button pure-button-primary btn-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveExamFormComp;
