import { useState } from "react";

import "./createNotice.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const NoticeForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    file: null,
  });

  const cook = Cookies.get("Token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    // setFormData({ ...formData, file: e.target.files[0] });
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://cvmu3-0-iems.onrender.com/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
      setFormData((prev) => ({
        ...prev,
        offerLetter: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    const res = await axios.post(
      "https://cvmu3-0-iems.onrender.com/v1/notices",
      JSON.stringify({
        title: formData.subject,
        description: formData.message,
        docs_id: formData.offerLetter,
      }),
      {
        headers: { Authorization: cook, "Content-Type": "application/json" },
      }
    );
    console.log(res);
    // if(res.data){
      navigate('/TeacherNotice');
    // }
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
