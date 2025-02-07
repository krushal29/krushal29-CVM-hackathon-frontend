//Css
import "./subject.css";

//react icons
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosTrophy } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

// img
import subjectImg from "../../../assets/unsplash_7uSKXpksCKg.png";

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
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 7,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
  {
    ID: 3,
    SubjectImage: subjectImg,
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 8,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
  {
    ID: 4,
    SubjectImage: subjectImg,
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 8,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
  {
    ID: 5,
    SubjectImage: subjectImg,
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 8,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
  {
    ID: 6,
    SubjectImage: subjectImg,
    SubjectTitle: "Data Structures and Algorithm (102001202)",
    SubjectLesson: 8,
    SubjectCourseCredit: 4,
    Subjectlevel: "Beginner",
  },
];

const Subject = () => {
  return (
    <div className="StudentSubject">
      <div className="StudentSubject1">
        <div className="filterSubject">
          <div className="filterInput">
            <IoSearchOutline style={{ paddingRight: 10, paddingLeft: 5 }} />
            <input
              type="text"
              placeholder="Enter Course Code or Partial Course Name"
            />
          </div>
          <div className="filterbtn">
            <button>
              <span>Filter</span>
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="FilterDetail">
              <div className="filterName">
                <input type="checkbox" />
                <label htmlFor="">Name</label>
              </div>
              <div className="filterCredit">
                <input type="checkbox" />
                <label htmlFor="">Credit</label>
              </div>
              <div className="filterName1">
                <input type="checkbox" />
                <label htmlFor="">Name</label>
              </div>
              <div className="filterlesson">
                <input type="checkbox" />
                <label htmlFor="">Lesson</label>
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
        <div className="SubjectCard">
          {obj.map((value, index) => (
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
                <button>
                  <span>View Material</span>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
