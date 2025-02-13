import { useState } from 'react';
import './AddSubject.css';

const SubjectForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    subjectName: '',
    courseCode: '',
    credits: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="form-container">
          <div className="CreateSubjecth1">
          <h1 className="form-title" style={{marginBottom:"30px"}}>Create Subject</h1>
          </div>
          <div className="SubjectForm">

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="subjectName">Subject Name</label>
              <input
                type="text"
                id="subjectName"
                name="subjectName"
                placeholder="e.g. Introduction to Computer Science"
                value={formData.subjectName}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="courseCode">Course Code</label>
              <input
                type="text"
                id="courseCode"
                name="courseCode"
                placeholder="e.g. CS61A"
                value={formData.courseCode}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="credits">Credits of Subject</label>
              <input
                type="number"
                id="credits"
                name="credits"
                placeholder="e.g. 4"
                value={formData.credits}
                onChange={handleChange}
                />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
                </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectForm;

// Example usage in parent component:
/*
import React, { useState } from 'react';
import SubjectForm from './SubjectForm';

const ParentComponent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsFormOpen(true)}>Open Form</button>
      <SubjectForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
};
*/