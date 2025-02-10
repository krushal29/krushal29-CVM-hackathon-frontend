import timetable from "../../../assets/image 2.png";

const Timetable = () => {
  return (
    <div className="profileTimetable">
            <div className="TimetableDetail">
              <div className="Timetableh4">
                <h4>Class Timetable</h4>
              </div>
              <div className="TimetableCollege">
                <p>Lecture 2 of 6</p>
                <p>Computer Science and Design - SEM 4</p>
                <p>GCET</p>
              </div>
            </div>
            <div className="timetablePhoto">
             <a href={timetable} target="_blank" > <img  src={timetable} alt="" /></a>
            </div>
          </div>
  )
}

export default Timetable