import { useRef, useState } from "react";
import "./registration.css"; // Import the CSS file

const RegistrationComp = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Handle file selection via input
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setFiles([...files, ...newFiles]);
  };

  // Handle Drag and Drop
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles = droppedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setFiles([...files, ...newFiles]);
  };

  // Remove a file from the list
  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  // Trigger file input when Browse is clicked
  const triggerFileInput = () => {
    fileInputRef.current.click();
    
  };
  
  return (
    <div className="upload-container">
      <h2>Upload Document</h2>
      <p className="description">
        Please upload files in PDF, DOCX, DOC, PPT, or PPTX format (Max: 25MB).
      </p>

      {/* Drag & Drop Area */}
      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <p>Drop files here or click to upload</p>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.ppt,.pptx"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>

      {/* Uploaded Files List */}
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index} className="file-item">
            <span>{file.name}</span>
            <button className="delete-btn" onClick={() => removeFile(file.name)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="button-group">
        <button className="scan-btn">📷 Scan</button>
        <button className="browse-btn" onClick={triggerFileInput}>
          📂 Browse
        </button>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="done-btn">Done</button>
      </div>
    </div>
  );
};

export default RegistrationComp;
