import { useEffect, useState } from "react";
import "./TeacherMaterialForm.css";
import { FiFile, FiVideo } from "react-icons/fi";
import axios from "axios";
import Cookies from "js-cookie";

const TeacherMaterialForm = () => {
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const [formData, setFormData] = useState({
    subject: "",
    title: "",
    materialType: "",
    files: null,
    videos: null,
    uploadedFileId: null, // Store uploaded file ID from API response
  });
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/subjects",
        { headers: { Authorization: `Bearer ${cook}` } }
      );
      console.log("res", response.data.subjects);
      setSubject(response.data.subjects);
    };
    data();
  }, []);
  console.log(formData);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileData = new FormData();
    fileData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
        fileData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setFormData((prev) => ({
        ...prev,
        files: file, // Store the file locally
        uploadedFileId: response.data.id, // Store uploaded file ID
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await axios.post(
      "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/resources/",
      JSON.stringify({
        subject_id:formData.subject,
        title:formData.title,
        shared_by:student_id,
        type:formData.materialType,
        docs_id:formData.uploadedFileId
      }),
      { headers: { Authorization: `Bearer ${cook}` } }
    );
    console.log(response);
  };

  return (
    <div className="TeacherMaterialForm">
      <div className="TeacherMaterialForm1">
        <div className="upload-container">
          <h2>Upload educational materials</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <label>Select subject</label>
            {/* <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            /> */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Select a Subject</option>
              {subject.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>

            <label>Material Title</label>
            <input
              type="text"
              name="title"
              placeholder="Material Title"
              value={formData.title}
              onChange={handleChange}
            />

            <label>Select material type</label>
            <select
              name="materialType"
              value={formData.materialType}
              onChange={handleChange}
            >
              <option value="">Material Type</option>
              <option value="lecture_notes">Lecture Notes</option>
              <option value="lab_manual">Lab Manual</option>
              <option value="books">Books</option>
              <option value="reference_material">Reference Material</option>
              <option value="syllabus">Syllabus</option>
              <option value="others">Others</option>
            </select>

            <div className="file-upload">
              <label className="file-label">
                <FiFile /> Add files
                <input type="file" onChange={handleFileChange} hidden />
              </label>
              {/* <label className="file-label">
                <FiVideo /> Add videos
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  multiple
                  hidden
                />
              </label> */}
            </div>

            <button type="submit" className="upload-button">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherMaterialForm;
