import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import "./notice.css";
import image from "../../../assets/Depth 6, Frame 0.png";
import Cookies from "js-cookie";
import axios from "axios";





const Notice = () => {
  // const navigate = useNavigate();
  const cook = Cookies.get("Token");

  const [notices,setNotics]=useState([]);


  // State for search input
  const [search, setSearch] = useState("");
  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        "https://cvmu3-0-iems.onrender.com/v1/notices",
        { headers: { Authorization: `Bearer ${cook}` } }
      );
      console.log(response);
      setNotics(response.data.notices);
    };
    data();
  }, []);

  // Filtered Notices
  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase())
  );
  // setNotics(filteredNotices);
  console.log(filteredNotices);
  
  return (
    <div className="Teachernotice">
      <div className="Teachernotice1">
        <div className="NoticeNavbar">
          <h1 style={{ color: "#272757", fontSize: "25px" }}>Notices</h1>
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
                    <p>{notice.description}</p>
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

export default Notice;
