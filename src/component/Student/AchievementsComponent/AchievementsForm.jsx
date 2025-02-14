import { useState } from 'react';
import './AchievementForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

const AchievementsForm = () => {
      const cook = Cookies.get("Token");
      const student_id=sessionStorage.getItem("user_id");
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        eventName: "",
        position: "",
        description: "",
        date: "",
        type: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleFileChange = (e) => {
    //     setFormData({ ...formData, file: e.target.files[0] });
    // };

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;
    
        const formData = new FormData();
        formData.append("file_upload", selectedFile);
    
        try {
          const response = await axios.post(
            "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
            formData,
            {
              headers: {
                headers: { "Content-Type": "multipart/form-data" },
              },
            }
          );
    
          console.log(response.data);
          setFormData((prev) => ({
            ...prev,
            file: response.data.id,
          }));
        } catch (error) {
          console.error("Upload failed", error);
        }
      };

      const SubmitHandle = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    
        try {
          const response1 = await axios.post(
            `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/achievements`,
            JSON.stringify({
              student_id:student_id,
              name:formData.eventName,
              type:formData.type,
              pos:formData.position,
              docs_id:formData.file
            }),
            {
              headers: {
                Authorization: `Bearer ${cook}`,
              },
            }
          );
          console.log("Response:", response1);
        } catch (error) {
          console.error("Submission failed", error);
        }
      };
    return (
        <div className="AchievementsForm">
            <div className="AchievementsForm1">
                <div className="form-container">
                    <h2>Add an Achievement</h2>
                    <form onSubmit={SubmitHandle}>
                        <label>Event Name</label>
                        <input
                            type="text"
                            name="eventName"
                            placeholder="e.g. Grace Hopper Celebration"
                            value={formData.eventName}
                            onChange={handleChange}
                        />

                        <label>Position</label>
                        <select name="position" value={formData.position} onChange={handleChange}>
                            <option value="participation">Participation</option>
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                            <option value="other">Others</option>
                        </select>

                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />

                        <label>Date</label>
                        <input style={{width:"91%"}}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        <label>Type</label>
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="academic">Academic</option>
                            <option value="sports">Sports</option>
                            <option value="cultural">Cultural</option>
                            <option value="other">Others</option>
                        </select>

                        <label>Upload a File</label>
                        <input type="file" accept=".pdf,.png,.jpg,.docx" onChange={handleFileChange} />

                        <button type="submit" onClick={()=>navigate('/Achievements')}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AchievementsForm;