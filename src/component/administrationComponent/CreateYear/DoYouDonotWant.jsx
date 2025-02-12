import { useState } from "react";
import "./CreateYear.css";

const DoYouDonotWant = ({ onClose }) => {
  const [year, setYear] = useState("");

  return (
    <>
      <div className="Donotwant">
        <div className="popup-backdrop" onClick={onClose} />
        <div className="year-popup">
          <div className="form-group">
            <label>Select a year</label>
            <input
              type="text"
              className="year-input"
              placeholder="Type here..."
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button
            className="confirm-btn"
            onClick={onClose}
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default DoYouDonotWant;
