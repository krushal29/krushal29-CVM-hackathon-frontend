import "./Event.css";
import Cookies from "js-cookie";

import event from "../../../assets/Depth 6, Frame 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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


 

  
  return (
    <div className="EventComponent">
      <div className="EventComponent1">
        <div className="EventComponentH1">
          <h1>Events</h1>
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
                              
                            </div>
                          </div>
                          <div className="EventPhoto">
                            <img src={event} alt="Event" />
                          </div>
                        </div>
                      </div>
                    ))}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
