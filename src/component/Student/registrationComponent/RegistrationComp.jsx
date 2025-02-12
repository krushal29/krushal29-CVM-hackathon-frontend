import { useRef, useState } from "react";
import "./registration.css";

const RegistrationComp = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const previousMarksheetRef = useRef(null);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles = droppedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const triggerPreviousMarksheetUpload = (event) => {
    event.stopPropagation(); // Prevents triggering parent click event
    previousMarksheetRef.current?.click();
  };

  return (
    <div className="upload-container">
      <h2>Upload Document</h2>
      <p className="description">
        Please upload files in pdf, docx or doc format and make sure the file size is under 25 MB.
      </p>
      <div 
        className="file-upload-area" 
        onDragOver={(e) => e.preventDefault()} 
        onDrop={handleDrop} 
        onClick={(e) => {
          if (!e.target.closest(".upload-btn")) {
            triggerFileInput();
          }
        }}
      >
        <p>Drag and drop files here or click to upload</p>
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <span className="file-name">📄 {file.name}</span>
            <button className="delete-btn" onClick={() => removeFile(file.name)}>🗑️</button>
          </div>
        ))}
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          ref={previousMarksheetRef}
          style={{ display: "none" }}
        />
      </div>

      <div className="button-group">
        <button className="scan-btn">📷 Scan</button>
        <button className="upload-btn" onClick={triggerFileInput}>⬆ Upload Adhar</button>
        <button className="upload-btn" onClick={(e) => triggerPreviousMarksheetUpload(e)}>⬆ Previous Marksheet</button>
      </div>
      
      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="done-btn">Done</button>
      </div>
    </div>
  );
};

export default RegistrationComp;
