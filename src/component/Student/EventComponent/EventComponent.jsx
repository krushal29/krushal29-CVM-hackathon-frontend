import './Event.css'


import event from '../../../assets/Depth 6, Frame 1.png'

const EventComponent = () => {
  return (
    <div className='EventComponent'>
      <div className="EventComponent1">
        <div className="EventComponentH1">
          <h1>Events</h1>
        </div>

        <div className="EventCart">
          <div className="EventCart1">
            <div className="Eventdays">
              <h4>Today</h4>
            </div>
            <div className="EventDetail">
              <div className="EventFirstSide">
                <div className="EventTime">
                  <p>11:00 AM</p>
                </div>
                <div className="EventName">
                  <h4>Tech Conference</h4>
                </div>
                <div className="Eventinfo">
                  <p>Join us for a day of learning and networking</p>
                </div>
                <div className="EventMoreInfo12">
                  <button>View details</button>
                </div>
              </div>
              <div className="EventPhoto">
                <img src={event} alt="" />
              </div>
            </div>
          </div>

          <div className="EventCart1">
            <div className="Eventdays">
              <h4>Tomorrow</h4>
            </div>
            <div className="EventDetail">
              <div className="EventFirstSide">
                <div className="EventTime">
                  <p>11:00 AM</p>
                </div>
                <div className="EventName">
                  <h4>Tech Conference</h4>
                </div>
                <div className="Eventinfo">
                  <p>Join us for a day of learning and networking</p>
                </div>
                <div className="EventMoreInfo12">
                  <button>View details</button>
                </div>
              </div>
              <div className="EventPhoto">
                <img src={event} alt="" />
              </div>
            </div>
          </div>



          <div className="EventCart1">
            <div className="Eventdays">
              <h4>This week</h4>
            </div>
            <div className="EventDetail">
              <div className="EventFirstSide">
                <div className="EventTime">
                  <p>11:00 AM</p>
                </div>
                <div className="EventName">
                  <h4>Tech Conference</h4>
                </div>
                <div className="Eventinfo">
                  <p>Join us for a day of learning and networking</p>
                </div>
                <div className="EventMoreInfo12">
                  <button>View details</button>
                </div>
              </div>
              <div className="EventPhoto">
                <img src={event} alt="" />
              </div>
            </div>
          </div>


          <div className="EventCart1">
            <div className="Eventdays">
              <h4>Next week</h4>
            </div>
            <div className="EventDetail">
              <div className="EventFirstSide">
                <div className="EventTime">
                  <p>11:00 AM</p>
                </div>
                <div className="EventName">
                  <h4>Tech Conference</h4>
                </div>
                <div className="Eventinfo">
                  <p>Join us for a day of learning and networking</p>
                </div>
                <div className="EventMoreInfo12">
                  <button>View details</button>
                </div>
              </div>
              <div className="EventPhoto">
                <img src={event} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default EventComponent