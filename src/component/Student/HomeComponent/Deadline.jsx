import assignment from "../../../assets/Vector - 0.png";

const obj = [
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },

  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "41days",
  },
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },
  {
    Subjectname: "Assignment 2 Due",
    AssignametNum: "Software Engineering - Assignment 2",
    Days: "3 days",
  },
];

const Deadline = () => {
  return (
    <>
      <div className="deadlines">
        <div className="deadlinesh4">
          <h4>Upcoming deadlines</h4>
        </div>
        {obj.map((data, index) => (
          <div key={index} className="deadlinesDetail">
            <div className="deadlinesimgDetail">
              <div className="deadlinesImg">
                <img src={assignment} alt="" />
              </div>
              <div className="deadlinesDetailsubject">
                <div className="deadlinesSubject">
                  <h5>{data.Subjectname}</h5>
                </div>
                <div className="deadlinesbranch">
                  <p>{data.AssignametNum}</p>
                </div>
              </div>
            </div>
            <div className="remainingDays">
              <p>{data.Days}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Deadline;
