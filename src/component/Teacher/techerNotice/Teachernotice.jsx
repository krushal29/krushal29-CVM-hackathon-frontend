import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./teacherNotice.css";
import image from "../../../assets/Depth 6, Frame 0.png";
import Cookies from "js-cookie";
import axios from "axios";

const Teachernotice = () => {
  const navigate = useNavigate();
  const cook = Cookies.get("Token");
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/notices",
          { headers: { Authorization: cook } }
        );
        setNotices(response.data.notices);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchData();
  }, [cook]);

  const handleDelete = (noticeId) => {
    setSelectedNoticeId(noticeId);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    if (!selectedNoticeId) return;
    try {
      await axios.delete(`https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/notices/${selectedNoticeId}`, {
        headers: { Authorization: cook },
      });
      setNotices((prevNotices) => prevNotices.filter((notice) => notice.id !== selectedNoticeId));
    } catch (error) {
      console.error("Error deleting notice:", error);
    } finally {
      setShowConfirmation(false);
      setSelectedNoticeId(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setSelectedNoticeId(null);
  };

  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      (notice.description && notice.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="Teachernotice">
      <div className="Teachernotice1">
        <div className="NoticeNavbar">
          <h1 style={{ color: "#272757", fontSize: "25px" }}>Notices</h1>
          <button onClick={() => navigate("/TeacherNotice/TeacherNoticeCreate")}>Create Notice</button>
        </div>

        <div className="NoticeSearch">
          <span><IoIosSearch /></span>
          <input
            type="text"
            placeholder="Search for notices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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
                    <p>{notice.description}</p>
                  </div>
                </div>
                <div className="NoticeTime">
                  <p>{notice.time}</p>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(notice.id)}>Delete</button>
              </div>
            ))
          ) : (
            <p className="no-results">No matching notices found.</p>
          )}
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <h3>Delete Notice</h3>
            <p>Are you sure you want to delete this notice?</p>
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

export default Teachernotice;