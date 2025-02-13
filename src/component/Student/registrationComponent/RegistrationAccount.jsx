import React, { useState } from 'react';
import './RegistrationAccount.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '',
    currentAddress: '',
    permanentAddress: '',
    mobileNumber: '(123) 456-7890',
    fatherName: 'John Doe',
    motherName: 'Jane Doe',
    fatherPhone: '(123) 456-7890',
    motherPhone: '(123) 456-7890',
    nextBatch: '',
    branch: ''
  });

  const branches = [
    'Computer Engineering',
    'Computer Science and Design',
    'Information Technology',
    'Mechanical Engineering'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register for an account</h2>
        
        <div className="form-row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </div>
          
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Current Address</label>
          <textarea
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="input-group">
          <label>Permanent Address</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label>Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Father's Phone Number</label>
            <input
              type="tel"
              name="fatherPhone"
              value={formData.fatherPhone}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label>Mother's Phone Number</label>
            <input
              type="tel"
              name="motherPhone"
              value={formData.motherPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Next Batch</label>
          <input
            type="text"
            name="nextBatch"
            value={formData.nextBatch}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          >
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>{branch}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
};

export default RegistrationForm;