
import '../../Student/layout/layout.css'
import PNavbar from "../ParentNavbar/PNavbar";

const PLayout = ({ children }) => {
  return (
    <div className="LayoutFlex">
      <div className="navbar">
        <PNavbar />
      </div>
      <div className="secondside">{children}</div>
    </div>
  );
};

export default PLayout;
