import lecture from "../../../assets/Depth 6, Frame 0.png";

//icons
import { FaArrowRightLong } from "react-icons/fa6";

const Lecture = () => {
  return (
    <div className="profileLecture">
                  <div className="lectureh4">
                    <h4>Next lecture</h4>
                  </div>
                <div className="nextLecture">
                  <div className="upcommingLecture">
                    <div className="upcommingLecture1">
                      <div className="lecturePhoto">
                        <img src={lecture} alt="" />
                      </div>
                      <div className="lectureDetail">
                        <div className="subjectName">
                          <p>Operating System</p>
                        </div>
                        <div className="SubjectDate">
                          <p>March 21, 2023</p>
                        </div>
                        <div className="subjectTime">
                          <p>Time: 2:00 to 2:50</p>
                        </div>
                      </div>
                    </div>
                    <div className="LectureRightArrow">
                      <FaArrowRightLong style={{cursor:"pointer"}}/>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Lecture