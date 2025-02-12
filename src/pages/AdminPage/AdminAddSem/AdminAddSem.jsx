import { useState } from "react";
import "./AdminAddSem.css";

const SemesterForm = () => {
  const [formData, setFormData] = useState({
    semester: "",
    startDate: "",
    branch: "",
    roomNumber: "",
    subjects: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (index, e) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index][e.target.name] = e.target.value;
    setFormData((prev) => ({ ...prev, subjects: newSubjects }));
  };

  const addSubjectField = () => {
    setFormData((prev) => ({
      ...prev,
      subjects: [...prev.subjects, { faculty: "", subject: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="AdminAddSem">
      <div className="AdminAddSem1">
        <form className="semester-form" onSubmit={handleSubmit}>
          <h2 className="form-title">New Semester</h2>

          <div className="form-group">
            <label className="form-label">Semester</label>
            <select
              className="select-input"
              name="semester"
              value={formData.semester}
              onChange={handleInputChange}
            >
              <option value="">Select Semester...</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Starting Date</label>
            <input
              type="text"
              className="form-input"
              placeholder="MM/DD/YYYY"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Branch</label>
            <select
              className="select-input"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
            >
              <option value="">Select branch...</option>
              <option value="cs">Computer Science</option>
              <option value="it">Information Technology</option>
              <option value="mech">Mechanical Engineering</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Assign Faculty to a subject</label>
            <button
              type="button"
              className="add-subject-btn"
              onClick={addSubjectField}
            >
              Add Subject +
            </button>

            {formData.subjects.map((subject, index) => (
                <div key={index} className="subject-fields-row">
                  <p>Subject:{index+1}</p>
                <div className="subject-field">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter Faculty"
                    name="faculty"
                    value={subject.faculty}
                    onChange={(e) => handleSubjectChange(index, e)}
                  />
                </div>
                <div className="subject-field">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter Subject"
                    name="subject"
                    value={subject.subject}
                    onChange={(e) => handleSubjectChange(index, e)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="form-group">
            <label className="form-label">Room Number</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter room number..."
              name="roomNumber"
              value={formData.roomNumber}
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

export default SemesterForm;
