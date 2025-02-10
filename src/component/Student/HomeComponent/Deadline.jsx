import assignment from "../../../assets/Vector - 0.png";

const Deadline = () => {
  return (
    <div className="deadlines">
      <div className="deadlinesh4">
        <h4>Upcoming deadlines</h4>
      </div>
      <div className="deadlinesDetail">
        <div className="deadlinesimgDetail">
          <div className="deadlinesImg">
            <img src={assignment} alt="" />
          </div>
          <div className="deadlinesDetailsubject">
            <div className="deadlinesSubject">
              <h5>Assignment 2 Due</h5>
            </div>
            <div className="deadlinesbranch">
              <p>Software Engineering - Assignment 2</p>
            </div>
          </div>
        </div>
        <div className="remainingDays">
          <p>3 days</p>
        </div>
      </div>
    </div>
  );
};

export default Deadline;
