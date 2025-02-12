import { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    userType: "student",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="AddUser">
      <div className="AddUser1">
        <form className="new-user-form" onSubmit={handleSubmit}>
          <h3 className="form-subtitle">Create new user</h3>

          <div className="form-section">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="User123"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="password123"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-section">
            <label className="form-label">User Type</label>
            <select
              className="user-type-select"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
            </select>

            <div className="upload-container">
              <input
                type="file"
                className="upload-input"
                id="photo-upload"
                onChange={handleFileUpload}
              />
              <label htmlFor="photo-upload" className="form-label">
                {formData.photo
                  ? `Uploaded: ${formData.photo.name}`
                  : "Upload Photo (Click to select)"}
              </label>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
