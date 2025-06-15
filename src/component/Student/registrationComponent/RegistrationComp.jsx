import { useRef, useState } from "react";
import "./registration.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationComp = () => {
  const cook = Cookies.get("Token");
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const previousMarksheetRef = useRef(null);
  const [id, setId] = useState({
    aadharID: "",
    MarksheeetId: "",
  });

  const handleFileUploadAddhar = async (event) => {
    if (!event.target.files) return;

    console.log("sd", event.target.files);

    const uploadedFiles = Array.from(event.target.files);
    console.log("addahr", uploadedFiles[0]);

    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    const formData = new FormData();
    formData.append("file_upload", event.target.files[0]);

    try {
      const response = await axios.post(
        "https://cvmu3-0-iems.onrender.com/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setId((prevId) => ({
        ...prevId, // Keep existing state
        aadharID: response.data.id, // Update only aadharID
      }));
      
      setFiles((prevFiles) => [
        // ...prevFiles,
        { name: uploadedFiles[0].name, id: response.data.id },
      ]);
    } catch (error) {
      console.error("Upload failed", error);
    }

    event.target.value = "";
  };
  console.log("files", files);

  const handleFileUploadmarksheet = async (event) => {
    if (!event.target.files) return;

    console.log("sd", event.target.files);

    const uploadedFiles = Array.from(event.target.files);
    console.log("addahr", uploadedFiles[0]);

    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    const formData = new FormData();
    formData.append("file_upload", event.target.files[0]);

    try {
      const response = await axios.post(
        "https://cvmu3-0-iems.onrender.com/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setId((prevId) => ({
        ...prevId, // Keep existing state
        MarksheeetId: response.data.id, // Update only MarksheeetId
      }));
      setFiles((prevFiles) => [
        // ...prevFiles,
        { name: uploadedFiles[0].name, id: response.data.id },
      ]);
    } catch (error) {
      console.error("Upload failed", error);
    }

    event.target.value = "";
  };
console.log("two id",id);

  

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles = droppedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (fileName, event) => {
    event.stopPropagation(); // Prevent click from bubbling to upload area
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const triggerFileInput = (event) => {
    event.stopPropagation(); // Prevent click from bubbling
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const triggerPreviousMarksheetUpload = (event) => {
    event.stopPropagation();
    if (previousMarksheetRef.current) {
      previousMarksheetRef.current.click();
    }
  };

  const handleCancel = (event) => {
    event.stopPropagation(); // Prevent click from bubbling to upload area
    // Add your cancel logic here
  };

  const handleDone = (event) => {
    event.stopPropagation(); // Prevent click from bubbling to upload area
    navigate(`/RegistrationAccount/${id.aadharID}/${id.MarksheeetId}`);
    // Add your done logic here
  };

  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm1">
        <div className="upload-container">
          <h2>Upload Document</h2>
          <p className="description">
            Please upload files in pdf, docx, or doc format. Max file size: 25
            MB.
          </p>
          <div
            className="file-upload-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={(e) => {
              // Only trigger if clicking directly on the upload area
              if (e.target === e.currentTarget) {
                triggerFileInput(e);
              }
            }}
          >
            <p>Drag and drop files here or click to upload</p>
            {files.map((file, index) => (
              <div
                key={index}
                className="file-item"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="file-name" style={{ width: "150%" }}>
                  📄 {file.name}
                </span>
                <button
                  className="delete-btn"
                  onClick={(e) => removeFile(file.name, e)}
                >
                  🗑
                </button>
              </div>
            ))}
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileUploadAddhar}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUploadmarksheet}
              ref={previousMarksheetRef}
              style={{ display: "none" }}
            />
          </div>

          <div className="button-group" onClick={(e) => e.stopPropagation()}>
            <button className="scan-btn" onClick={(e) => e.stopPropagation()}>
              📷 Scan
            </button>
            <button className="upload-btn" onClick={triggerFileInput}>
              ⬆ Upload Aadhaar
            </button>
            <button
              className="upload-btn"
              onClick={triggerPreviousMarksheetUpload}
            >
              ⬆ Previous Marksheet
            </button>
          </div>

          <div className="action-buttons" onClick={(e) => e.stopPropagation()}>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="done-btn" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComp;
