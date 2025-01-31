//image
import student from '../../../assets/Ellipse 34.png'


//css
import '../feedback/feedback.css'

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback1">
        <div className="feedbackHeading">
          <h1>What student’s say</h1>
        </div>
        <div className="feedbackp">
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="feedbackCardall">
          <div className="feedbackCard">
            <div className="feedBackInformation">
              <p>
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
            </div>
            <div className="StudentDetails">
                <div className="studentlogo">
                    <img src={student} alt="" />
                </div>
                <div className="studentNameSkill">
                    <h3>Finlay Kirk</h3>
                    <p>Web Developper</p>
                </div>
            </div>
          </div>



          <div className="feedbackCard">
            <div className="feedBackInformation">
              <p>
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
            </div>
            <div className="StudentDetails">
                <div className="studentlogo">
                    <img src={student} alt="" />
                </div>
                <div className="studentNameSkill">
                    <h3>Finlay Kirk</h3>
                    <p>Finlay Kirk</p>
                </div>
            </div>
          </div>




          <div className="feedbackCard">
            <div className="feedBackInformation">
              <p>
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
            </div>
            <div className="StudentDetails">
                <div className="studentlogo">
                    <img src={student} alt="" />
                </div>
                <div className="studentNameSkill">
                    <h3>Finlay Kirk</h3>
                    <p>Finlay Kirk</p>
                </div>
            </div>
          </div>



          <div className="feedbackCard">
            <div className="feedBackInformation">
              <p>
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
            </div>
            <div className="StudentDetails">
                <div className="studentlogo">
                    <img src={student} alt="" />
                </div>
                <div className="studentNameSkill">
                    <h3>Finlay Kirk</h3>
                    <p>Finlay Kirk</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
