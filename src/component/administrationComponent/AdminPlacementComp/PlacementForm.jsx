import  { useState } from 'react';
import './Placement.css';

const PlacementForm = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <div className="popup-backdrop" onClick={onClose} />
      <div className="placement-popup">
        <h2>Placement Detail</h2>
        
        <div className="form-group">
          <label htmlFor="enrollment">Disclaimed number</label>
          <input
            type="text"
            id="enrollment"
            className="form-input"
            placeholder="Enter enrollment number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company name</label>
          <input
            type="text"
            id="company"
            className="form-input"
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="package">Other package (LPA)</label>
          <input
            type="text"
            id="package"
            className="form-input"
            placeholder="Enter other package"
          />
        </div>

        <div className="form-group">
          <label>Upload offer letter</label>
          <div className="upload-container">
            <input
              type="file"
              id="upload"
              className="upload-input"
              onChange={handleFileUpload}
            />
            <label htmlFor="upload" className="upload-label">
              {file ? (
                <>Uploaded: {file.name}</>
              ) : (
                <>Drag & drop or <span>browse</span> from drive</>
              )}
            </label>
          </div>
        </div>

        <div className="form-group">
          <button onClick={onClose}
            className="submit-btn"
            style={{
              backgroundColor: '#272757',
              color: '#ffffff',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              fontSize: '0.9rem'
            }}
          >
            Submit Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PlacementForm;