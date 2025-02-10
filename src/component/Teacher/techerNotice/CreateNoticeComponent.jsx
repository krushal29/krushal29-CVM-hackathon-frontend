import { useState } from "react";

import "./createNotice.css";

const NoticeForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="CreateNotice">
      <div className="CreateNotice1">
        <div className="notice-form-container">
          <h2>Send a Notice</h2>
          <form onSubmit={handleSubmit}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter a subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <label>Attach a file (optional)</label>
            <input type="file" onChange={handleFileChange} />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
