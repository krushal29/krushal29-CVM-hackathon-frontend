import "./subject.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// React icons
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";

// Image
import subjectImg from "../../../assets/unsplash_7uSKXpksCKg.png";
import { useNavigate } from "react-router-dom";



const Subject = () => {
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const [obj,setObj]=useState([]);


  const [filters, setFilters] = useState({
    name: false,
  });

  // Handle filter checkbox change
  const handleFilterChange = (filterType) => {
    setFilters((prev) => ({ ...prev, [filterType]: !prev[filterType] }));
  };

  // Filtered subjects based on user input and selected filters
  const filteredSubjects = obj.filter((subject) => {
    let matchesSearch = searchQuery
      ? subject.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    let matchesFilters = true;
    if (filters.name) {
      matchesFilters =
        matchesFilters &&
        subject.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (filters.code) {
      matchesFilters =
        matchesFilters &&
        subject.code.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return matchesSearch && matchesFilters;
  });


  useEffect(()=>{
    const data=async()=>{
      const response = await axios.get(
        "https://cvmu3-0-iems.onrender.com/v1/subjects",
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(response.data.subjects);
      setObj(response.data.subjects);
      
    }
    data();
  },[])

  return (
    <div className="StudentSubject">
      <div className="StudentSubject1">
        {/* Search and Filter Section */}
        <div className="filterSubject">
          <div className="filterInput">
            <IoSearchOutline style={{ paddingRight: 10, paddingLeft: 5 }} />
            <input
              type="text"
              placeholder="Enter Course Code or Partial Course Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filterbtn">
            <button>
              <span>Filter</span>
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="FilterDetail">
              <div className="filterName">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("name")}
                  checked={filters.name}
                />
                <label style={{ fontSize: "15px" }}>Name</label>
              </div>
              <div className="filterCredit">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("credit")}
                  checked={filters.credit}
                />
                <label style={{ fontSize: "15px" }}>Credit (4+)</label>
              </div>
              <div className="filterlesson">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("lesson")}
                  checked={filters.lesson}
                />
                <label style={{ fontSize: "15px" }}>Lesson (8+)</label>
              </div>
            </div>
          </div>
        </div>

        {/* Display Filtered Subjects */}
        <div className="SubjectCard">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((value, index) => (
              <div key={index} className="SubjectCard1">
                <div className="SubjectImg">
                  <img src={subjectImg} alt="" />
                </div>
                <div className="SubjectTitle">
                  <h4>{value.name}-{value.code}</h4>
                </div>
                <div className="SubjectDetail">
                  <div className="subjectCourseCredit">
                    <p>
                      <CgProfile  style={{paddingRight:"10px"}}/>
                      <span>Course Credit : {value.credits}</span>
                    </p>
                  </div>
                  {/* <div className="subejctlevel">
                    <p>
                      <IoIosTrophy />
                      <span>{value.Subjectlevel}</span>
                    </p>
                  </div> */}
                </div>
                <div className="ViewMaterial">
                  <button onClick={() => navigate(`/StudentsubjectMaterial/${value.id}`)}>
                    <span>View Material</span>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>
              No matching subjects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
