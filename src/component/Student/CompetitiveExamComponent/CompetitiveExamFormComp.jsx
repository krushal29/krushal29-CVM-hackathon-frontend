import { useLocation } from "react-router-dom";

const CompetitiveExamFormComp = () => {

  return (
    <div className="CompetitiveForm">
      <div className="CompetitiveForm1">
        <div className="form-container">

          <h2 className="form-title">Add Marks</h2>
          <form className="pure-form pure-form-stacked">
            <label>Student Name</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Name"
            />

            <label>Enrollment Number</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Enrollment No."
            />

            <label>Exam Score</label>
            <input
              type="number"
              className="pure-input-1"
              placeholder="Enter Score"
            />

            <label>Exam Position</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Position"
            />

            <label>Exam Seat Number</label>
            <input
              type="text"
              className="pure-input-1"
              placeholder="Enter Seat No."
            />

            <button
              type="button"
              className="pure-button pure-button-primary btn-marksheet"
            >
              Add Marksheet
            </button>

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
