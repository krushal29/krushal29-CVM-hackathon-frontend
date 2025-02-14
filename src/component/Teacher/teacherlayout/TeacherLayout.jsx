import Teachernavber from '../TeacherNavbar/Teachernavbar'


//css
import '../../Student/layout/layout.css'

const TeacherLayout = ({ children }) => {
  return (
    <div className="LayoutFlex">
      <div className="navbar">
        <Teachernavber />
      </div>
      <div className="secondside">{children}</div>
    </div>
  );
};

export default TeacherLayout;
