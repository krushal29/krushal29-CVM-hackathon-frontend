import { useState } from "react";
import "./placement.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlacementCom = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    companyName: "",
    offerPackage: "",
    offerLetter: null,
  });

  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");

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
        { headers: { "Content-Type": "multipart/form-data" } }
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
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const response1 = await axios.post(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements`,
      JSON.stringify({
        student_id,
        company_name:formData.companyName,
        package:formData.offerPackage,
        letter_uid:formData.offerLetter,
        role:""
      }),
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log("res",response1);
    if(response1) navigate('/StudentPlacementOffer');
    
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
                name="file_upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlacementCom;
