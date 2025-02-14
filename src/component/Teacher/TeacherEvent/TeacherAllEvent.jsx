import './TeacherAllEvent.css';
import eventImage from '../../../assets/Depth 6, Frame 1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EventComponent = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    { id: 1, day: 'Today', time: '11:00 AM', name: 'Tech Conference', description: 'Join us for a day of learning and networking' },
    { id: 2, day: 'Tomorrow', time: '11:00 AM', name: 'Tech Meetup', description: 'A casual networking event for developers' },
    { id: 3, day: 'This week', time: '02:00 PM', name: 'AI Workshop', description: 'Learn about the latest AI trends' },
    { id: 4, day: 'Next week', time: '10:00 AM', name: 'Startup Pitch', description: 'Pitch your startup ideas to investors' }
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleDelete = (eventId) => {
    setSelectedEventId(eventId);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== selectedEventId));
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
            <button onClick={() => navigate('/teacherEvent/teacherEventCreate')}>Create event</button>
          </div>
        </div>

        <div className="EventCart">
          {events.map((eventItem) => (
            <div key={eventItem.id} className="EventCart1">
              <div className="Eventdays">
                <h4>{eventItem.day}</h4>
              </div>
              <div className="EventDetail">
                <div className="EventFirstSide">
                  <div className="EventTime">
                    <p>{eventItem.time}</p>
                  </div>
                  <div className="EventName">
                    <h4>{eventItem.name}</h4>
                  </div>
                  <div className="Eventinfo">
                    <p>{eventItem.description}</p>
                  </div>
                  <div className="EventButtons">
                    <button className="view-btn">View Attachment</button>
                    <button className="delete-btn" onClick={() => handleDelete(eventItem.id)}>Delete</button>
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
              <button className="cancel-btn" onClick={cancelDelete}>Cancel</button>
              <button className="confirm-btn" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventComponent;
