import { useState } from "react";
import "./TeacherEvent.css";

const TeacherEvent = () => {
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

  const handleFileChange = (e) => {
    setEventData({ ...eventData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
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
