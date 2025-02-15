import { useState } from "react";
import "./TeacherEvent.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TeacherEvent = () => {
  const navigate=useNavigate();
  const student_id = sessionStorage.getItem("user_id");
    const cook = Cookies.get("Token");
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    startTime: "08:00",
    endTime: "09:00",
    location: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };
  console.log(eventData);
  

  const handleFileChange = async (e) => {
    // setFormData({ ...formData, offerLetter: e.target.files[0] });
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setEventData((prev) => ({
        ...prev,
        photo: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(eventData);

    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/events/",
        JSON.stringify({
          tile:eventData.title,
          description:eventData.description,
          date:eventData.date,
          start_time:eventData.startTime,
          end_time:eventData.endTime,
          location:eventData.location,
          docs_id:eventData.photo
        }),
        { headers: { Authorization:`Bearer ${cook}`} }
      );

      console.log(response.data);
      if(response.data) navigate('/teacherEvent');
      
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="TeacherEvent">
      <div className="TeacherEvent1">
        <div className="event-container">
          <h2 className="event-title">New Event</h2>
          <form onSubmit={handleSubmit} className="event-form">
            <label>Event name</label>
            <input
              type="text"
              name="title"
              placeholder="Add a title"
              onChange={handleChange}
            />

            <label>Date</label>
            <input type="date" name="date" onChange={handleChange} />

            <div className="time-inputs">
              <div>
                <label>Start time</label>
                <input
                  type="time"
                  name="startTime"
                  value={eventData.startTime}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>End time</label>
                <input
                  type="time"
                  name="endTime"
                  value={eventData.endTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Add location"
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              name="description"
              placeholder="Add details"
              onChange={handleChange}
            ></textarea>

            <p>You can also add files or photos</p>
            <input type="file" onChange={handleFileChange} />

            <button type="submit" className="submit-btn">
              Create event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherEvent;
