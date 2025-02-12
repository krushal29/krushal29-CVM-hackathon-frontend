import "./subject.css";
import { useState } from "react";

// React icons
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosTrophy } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

// Image
import subjectImg from "../../../assets/unsplash_7uSKXpksCKg.png";
import { useNavigate } from "react-router-dom";

const obj = [
  {
    ID: 1,
    SubjectImage: subjectImg,
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 8,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
  {
    ID: 2,
    SubjectImage: subjectImg,
    SubjectTitle: "Operating Systems (105032301)",
    SubjectLesson: 7,
    SubjectCourseCredit: 3,
    Subjectlevel: "Intermediate",
  },
  {
    ID: 3,
    SubjectImage: subjectImg,
    SubjectTitle: "Database Management Systems (102004502)",
    SubjectLesson: 10,
    SubjectCourseCredit: 4,
    Subjectlevel: "Advanced",
  },
  {
    ID: 4,
    SubjectImage: subjectImg,
    SubjectTitle: "Computer Networks (102003701)",
    SubjectLesson: 6,
    SubjectCourseCredit: 3,
    Subjectlevel: "Beginner",
  },
  {
    ID: 5,
    SubjectImage: subjectImg,
    SubjectTitle: "Machine Learning (105048401)",
    SubjectLesson: 12,
    SubjectCourseCredit: 5,
    Subjectlevel: "Advanced",
  },
];

const Subject = () => {
  const navigate=useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: false,
    credit: false,
    lesson: false,
  });

  // Handle filter checkbox change
  const handleFilterChange = (filterType) => {
    setFilters((prev) => ({ ...prev, [filterType]: !prev[filterType] }));
  };

  // Filtered subjects based on user input and selected filters
  const filteredSubjects = obj.filter((subject) => {
    let matchesSearch = searchQuery
      ? subject.SubjectTitle.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    let matchesFilters = true;
    if (filters.name) {
      matchesFilters = matchesFilters && subject.SubjectTitle.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (filters.credit) {
      matchesFilters = matchesFilters && subject.SubjectCourseCredit >= 4; // Example: Only show subjects with >= 4 credits
    }
    if (filters.lesson) {
      matchesFilters = matchesFilters && subject.SubjectLesson >= 8; // Example: Only show subjects with >= 8 lessons
    }

    return matchesSearch && matchesFilters;
  });

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
                <label>Name</label>
              </div>
              <div className="filterCredit">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("credit")}
                  checked={filters.credit}
                />
                <label>Credit (4+)</label>
              </div>
              <div className="filterlesson">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("lesson")}
                  checked={filters.lesson}
                />
                <label>Lesson (8+)</label>
              </div>
              <div className="filterShowmore">
                <IoMdAdd />
                <span>Show more</span>
              </div>
              <div className="filterApply">
                <p>Apply</p>
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
                  <img src={value.SubjectImage} alt="" />
                </div>
                <div className="SubjectTitle">
                  <h4>{value.SubjectTitle}</h4>
                </div>
                <div className="SubjectDetail">
                  <div className="subjectlesson">
                    <p>
                      <MdPlayLesson /> <span>Lesson : {value.SubjectLesson}</span>
                    </p>
                  </div>
                  <div className="subjectCourseCredit">
                    <p>
                      <CgProfile />
                      <span>Course Credit : {value.SubjectCourseCredit}</span>
                    </p>
                  </div>
                  <div className="subejctlevel">
                    <p>
                      <IoIosTrophy />
                      <span>{value.Subjectlevel}</span>
                    </p>
                  </div>
                </div>
                <div className="ViewMaterial">
                  <button onClick={()=>navigate('/StudentsubjectMaterial')}>
                    <span>View Material</span>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>No matching subjects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
