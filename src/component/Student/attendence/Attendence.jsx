import './attendence.css';

const data = [
    {
        SubjectName: "DBMS",
        CourseCode: "#2123123",
        From: "21/07/24",
        To: "21/07/24",
        TotalDays: 100,
        PresentDays: 70
    },
    {
        SubjectName: "DBMS",
        CourseCode: "#2123123",
        From: "21/07/24",
        To: "21/07/24",
        TotalDays: 100,
        PresentDays: 70
    },

    {
        SubjectName: "DBMS",
        CourseCode: "#2123123",
        From: "21/07/24",
        To: "21/07/24",
        TotalDays: 100,
        PresentDays: 70
    },
    {
        SubjectName: "DBMS",
        CourseCode: "#2123123",
        From: "21/07/24",
        To: "21/07/24",
        TotalDays: 100,
        PresentDays: 70
    },
    {
        SubjectName: "DBMS",
        CourseCode: "#2123123",
        From: "21/07/24",
        To: "21/07/24",
        TotalDays: 9,
        PresentDays: 7
    },

];

const Attendance = () => {
    return (
        <div className="StudentAttendance">
            <div className="AttendenceDetail">
            <h1>Attendance Sheet</h1>

            <table className="AttendanceTable">
                <thead>
                    <tr>
                        <th>Course code</th>
                        <th>Subject</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Attended</th>
                        <th>Total</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.CourseCode}</td>
                            <td>{item.SubjectName}</td>
                            <td>{item.From}</td>
                            <td>{item.To}</td>
                            <td>{item.PresentDays}</td>
                            <td>{item.TotalDays}</td>
                            <td>{((parseFloat(item.PresentDays)/parseFloat(item.TotalDays))*100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    </div>
        </div>
    );
};

export default Attendance;
