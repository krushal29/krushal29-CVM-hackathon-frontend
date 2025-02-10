import { useState } from "react";
import "./TeacherMaterialForm.css";
import { FiFile, FiVideo } from "react-icons/fi";

const TeacherMaterialForm = () => {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [files, setFiles] = useState(null);
  const [videos, setVideos] = useState(null);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleVideoChange = (event) => {
    setVideos(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ subject, title, materialType, files, videos });
    alert("Material uploaded successfully!");
  };

  return (
    <div className="TeacherMaterialForm">
      <div className="TeacherMaterialForm1">
        <div className="upload-container">
          <h2>Upload educational materials</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <label>Select subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <label>Material Title</label>
            <input
              type="text"
              placeholder="Material Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Select material type</label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
            >
              <option value="">Material Type</option>
              <option value="Notes">Notes</option>
              <option value="Assignments">Assignments</option>
              <option value="Lectures">Lectures</option>
              <option value="Syllabus">Syllabus</option>
            </select>

            <div className="file-upload">
              <label className="file-label">
                <FiFile /> Add files
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  hidden
                />
              </label>
              <label className="file-label">
                <FiVideo /> Add videos
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  multiple
                  hidden
                />
              </label>
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
