import { useState } from 'react';
import './AchievementForm.css'

const AchievementsForm = () => {
    const [formData, setFormData] = useState({
        eventName: "",
        position: "",
        description: "",
        date: "",
        location: "",
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
        console.log(formData);
      };


  return (
    <div className="AchievementsForm">
      <div className="AchievementsForm1">
        <div className="form-container">
          <h2>Add an achievement</h2>
          <form onSubmit={handleSubmit}>
            <label>Event name</label>
            <input
              type="text"
              name="eventName"
              placeholder="e.g. Grace Hopper Celebration"
              value={formData.eventName}
              onChange={handleChange}
            />

            <label>Position</label>
            <input
              type="text"
              name="position"
              placeholder="Runners up"
              value={formData.position}
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, State"
              value={formData.location}
              onChange={handleChange}
            />

            <label>Upload a file</label>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.docx"
              onChange={handleFileChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AchievementsForm