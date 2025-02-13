import { useState } from "react";
import "./Addresult.css";

const AddResult = () => {
  const [formData, setFormData] = useState({
    emotionalNumber: "",
    enrollmentNumber: "",
    sopa: "",
    copa: "",
    source: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="addResult">
      <div className="addResult1">
        <form className="results-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Enter Results</h2>

          

          <div className="form-group">
            <label className="form-label">Enrollment Number</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter enrollment number"
              name="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">SGPA</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter SGPA"
              name="sopa"
              value={formData.sopa}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">CGPA</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter CGPA"
              name="copa"
              value={formData.copa}
              onChange={handleInputChange}
            />
          </div>

         

          <button type="submit" className="submit-button">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResult;
