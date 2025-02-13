import { useState } from "react";
import "./Placement.css";
import Cookies from "js-cookie";
import axios from "axios";

const PlacementForm = ({ onClose }) => {
  const [file, setFile] = useState({
    enrollmentNumber: "",
    companyName: "",
    offerPackage: "",
    offerLetter: null,
  });

  console.log(file);

  const cook = Cookies.get("Token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file_upload", selectedFile);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
        formData,
        {
          headers: {
            headers: { "Content-Type": "multipart/form-data" },
          },
        }
      );

      console.log(response.data);
      setFile((prev) => ({
        ...prev,
        offerLetter: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const SubmitHandle = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", file);

    try {
      const response1 = await axios.post(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements/enrollment`,
        JSON.stringify({
          enroll_id: file.enrollmentNumber,
          company_name: file.companyName,
          package: file.offerPackage,
          letter_uid: file.offerLetter,
          role: "",
        }),
        {
          headers: {
            Authorization: `Bearer ${cook}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response1);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      <div className="popup-backdrop" onClick={onClose} />
      <div className="placement-popup">
        <h2>Placement Detail</h2>
        <form onSubmit={SubmitHandle}>
          <div className="form-group">
            <label htmlFor="enrollment">Enrollment Number</label>
            <input
              type="text"
              id="enrollment"
              name="enrollmentNumber"
              className="form-input"
              placeholder="Enter enrollment number"
              value={file.enrollmentNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="companyName"
              className="form-input"
              placeholder="Enter company name"
              value={file.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="package">Offer Package (LPA)</label>
            <input
              type="text"
              id="package"
              name="offerPackage"
              className="form-input"
              placeholder="Enter offer package"
              value={file.offerPackage}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Offer Letter</label>
            <div className="upload-container">
              <input
                type="file"
                id="upload"
                className="upload-input"
                onChange={handleFileUpload}
              />
              <label htmlFor="upload" className="upload-label">
                {file.offerLetter ? (
                  <>File Uploaded</>
                ) : (
                  <>
                    Drag & drop or <span>browse</span> from drive
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="submit-btn"
              style={{
                backgroundColor: "#272757",
                color: "#ffffff",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                width: "100%",
                fontSize: "0.9rem",
              }}
            >
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PlacementForm;
