//CSS
import './attendence.css'

const obj=[
    {
        SubjectName:"DBMS",
        CourseCode:"#2123123",
        From:"21/07/24",
        To:"21/07/24",
        TotalDays:100,
        PresentDays:70
    }
]


const Attendence = () => {
  return (
    <div className="StudentAttendence">
        <div className="StudentAttendence1">
            <div className="AttendenceH3">
                <h3>Attendance Sheet</h3>
            </div>
            <div className="AttendenceTable">
                <div className="AttendenceHeading">
                    <p>Subject Name</p>
                    <p>Course Code</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Total Present/Out of</p>
                </div>
                <div className="AttendenceDetail">
                    <p>DBMS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendence