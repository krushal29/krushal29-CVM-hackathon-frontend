import { useState } from "react";
import "./placement.css";

const PlacementCom = () => {
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    companyName: "",
    offerPackage: "",
    offerLetter: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, offerLetter: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="placement">
      <div className="form-container">
        <div className="form-box">
          <h2 className="form-title">Placement Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enrollment Number</label>
              <input
                type="text"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={handleChange}
                placeholder="Enter enrollment number"
                required
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                required
              />
            </div>

            <div className="form-group">
              <label>Offer Package (LPA)</label>
              <input
                type="number"
                name="offerPackage"
                value={formData.offerPackage}
                onChange={handleChange}
                placeholder="Enter offer package"
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Offer Letter</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default PlacementCom;
