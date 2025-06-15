import "./TeacherAllEvent.css";
import eventImage from "../../../assets/Depth 6, Frame 1.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const EventComponent = () => {
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const navigate = useNavigate();
  
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "https://cvmu3-0-iems.onrender.com/v1/events",
          { headers: { Authorization: `Bearer ${cook}` } }
        );
        console.log(response.data.events);
        setEvents(response.data.events);
      } catch (error) {
        console.error("Upload failed", error);
      }
    };
    data();
  }, []);


  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleDelete = (eventId) => {
    setSelectedEventId(eventId);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== selectedEventId)
    );
    setShowConfirmation(false);
    setSelectedEventId(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setSelectedEventId(null);
  };

  return (
    <div className="EventComponent">
      <div className="EventComponent1">
        <div className="EventNavbar">
          <div className="EventComponentH1">
            <h1>Events</h1>
          </div>
          <div className="EventCreate">
            <button
              onClick={() => navigate("/teacherEvent/teacherEventCreate")}
            >
              Create event
            </button>
          </div>
        </div>

        <div className="EventCart">
          {events.map((eventItem) => (
            <div key={eventItem.id} className="EventCart1">
              {/* <div className="Eventdays">
                <h4>{eventItem.day}</h4>
              </div> */}
              <div className="EventDetail">
                <div className="EventFirstSide">
                  <div className="EventTime">
                    <p>{eventItem.start_time}</p>
                  </div>
                  <div className="EventName">
                    <h4>{eventItem.tile}</h4>
                  </div>
                  <div className="Eventinfo">
                    <p>{eventItem.description}</p>
                  </div>
                  <div className="EventButtons">
                    <a
                      href={`https://cvmu3-0-iems.onrender.com/v1/files/${eventItem.docs_id}`}
                    >
                      <button className="view-btn">View Attachment</button>
                    </a>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(eventItem.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="EventPhoto">
                  <img src={eventImage} alt="Event" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <h3>Delete Event</h3>
            <p>Are you sure you want to delete this event?</p>
            <div className="confirmation-buttons">
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventComponent;
