import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./teacherNotice.css";
import image from "../../../assets/Depth 6, Frame 0.png";

const Teachernotice = () => {
  const navigate = useNavigate();

  // Sample Notices Data
  const notices = [
    { id: 1, title: "Homework due tomorrow", details: "Sent to students in your class", time: "Yesterday" },
    { id: 2, title: "Exam Schedule Released", details: "Check the new exam dates", time: "2 days ago" },
    { id: 3, title: "Library Books Due", details: "Return overdue books", time: "Last week" },
    { id: 4, title: "Parent-Teacher Meeting", details: "Meeting on Friday", time: "3 days ago" },
    { id: 5, title: "Sports Day Announcement", details: "Event on next Monday", time: "1 week ago" }
  ];

  // State for search input
  const [search, setSearch] = useState("");

  // Filtered Notices
  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(search.toLowerCase()) ||
    notice.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Teachernotice">
      <div className="Teachernotice1">
        <div className="NoticeNavbar">
          <h1 style={{ color: "#272757", fontSize: "25px" }}>Notices</h1>
          <button onClick={() => navigate("/TeacherNotice/TeacherNoticeCreate")} style={{backgroundColor:"#272757",color:"white",padding:"8px 15px",borderRadius:"10px",border:"none",cursor:"pointer"}}>Create Notice</button>
        </div>

        {/* Search Bar */}
        <div className="NoticeSearch">
          <span>
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Search for notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Display Filtered Notices */}
        <div className="NoticeDetails">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div className="NoticeDetail1" key={notice.id}>
                <div className="NoticeDetail2">
                  <div className="NoticeImage">
                    <img src={image} alt="Notice" />
                  </div>
                  <div className="NoticeInformation">
                    <h3>{notice.title}</h3>
                    <p>{notice.details}</p>
                  </div>
                </div>
                <div className="NoticeTime">
                  <p>{notice.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No matching notices found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachernotice;
