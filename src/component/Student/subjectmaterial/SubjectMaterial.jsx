import "./SubjectMaterial.css";

import pdfLogo from "../../../assets/Vector - 0.png";

const SubjectMaterial = () => {
  return (
    <div className="SubjectMaterial">
      <div className="SubjectMaterial1">
        <div className="SubjectMaterialPath">
          <p>
            <span>Subject /</span> DBMS
          </p>
        </div>
        <div className="SubjectMaterialSubject">
          <h1>DBMS</h1>
        </div>
        <div className="SubjectProfessor">
          <p>Dr. A. Einstein </p>
        </div>
        <div className="SubjectMaterialNavbar">
          <ul>
            <li>Overview</li>
            <li>Lectures</li>
            <li>Assignments</li>
            <li>Notes</li>
            <li>Syllabus</li>
          </ul>
        </div>

        <div className="SubjectMaterialDetail">
          <div className="SubjectMaterialAssignment">
            <h2>Assignments</h2>
          </div>

          <div className="Document">
            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>


            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>
          </div>

          <div className="SubjectMaterialAssignment">
            <h2>Notes</h2>
          </div>

          <div className="Document">
            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>


            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>
          </div>



          <div className="SubjectMaterialAssignment">
            <h2>Syllabus</h2>
          </div>

          <div className="Document">
            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>


            <div className="DocumentpdfDetail">
              <div className="DocumentImgInfroamtion">
              <div className="DocumentImg">
                <img src={pdfLogo} alt="" />
              </div>
              <div className="DocumentDetail">
                <div className="DocumentChapter">
                  <h3>Assignment 1: Kinematics</h3>
                </div>
                <div className="DocumentLastDate">
                  <p>Due: Jan 15</p>
                </div>
              </div>
              </div>
              <div className="DocumentDownload">
                <button>Download File</button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default SubjectMaterial;
