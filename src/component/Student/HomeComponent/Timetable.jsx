import timetable from "../../../assets/image 2.png";

const Timetable = () => {
  return (
    <div className="profileTimetable">
            <div className="TimetableDetail">
              <div className="Timetableh4">
                <h4>Class Timetable</h4>
              </div>
            </div>
            <div className="timetablePhoto">
             <a href={timetable} target="_blank" > <img  src={timetable} alt="" /></a>
            </div>
          </div>
  )
}

export default Timetable