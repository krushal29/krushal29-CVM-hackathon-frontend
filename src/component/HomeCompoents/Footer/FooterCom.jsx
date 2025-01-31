//css
import "./Footer.css";

//image
import logo from "../../../assets/Group.jpg";

const FooterCom = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <div className="footer2">
            <div className="firstSide">
              <div className="FooterLogo">
                <img src={logo} alt="" />
                <span>Logo</span>
              </div>
              <div className="footerP">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy a type specimen book.
                </p>
              </div>
            </div>

            {/* Second Part */}
            <div className="secondSide">
              <div className="secondSideh3">
                <h3>Company</h3>
              </div>
              <div className="secondSidelist">
                <ul>
                  <li>About Us</li>
                  <li>How to work?</li>
                  <li>Populer Course</li>
                  <li>Service</li>
                </ul>
              </div>
            </div>

            {/* Third Part */}
            <div className="thirdSide">
              <div className="thirdSideh3">
                <h3>Courses</h3>
              </div>
              <div className="thirdSidelist">
                <ul>
                  <li>Categories</li>
                  <li>Ofline Course</li>
                  <li>Video Course</li>
                </ul>
              </div>
            </div>
            {/* forth Part */}
            <div className="forthSide">
              <div className="forthSideh3">
                <h3>Support</h3>
              </div>
              <div className="forthSidelist">
                <ul>
                  <li>FAQ</li>
                  <li>Help Center</li>
                  <li>Career</li>
                  <li>Privacy </li>
                </ul>
              </div>
            </div>
            {/* fifth Part */}
            <div className="fifthSide">
              <div className="fifthSideh3">
                <h3>Contac Info</h3>
              </div>
              <div className="fifthSidelist">
                <ul>
                  <li>+0913-705-3875</li>
                  <li>ElizabethJ@jourrapide.com</li>
                  <li>4808 Skinner Hollow Road
                  Days Creek, OR 97429</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="Reserved">
            <p>BookStore All Right Reserved, 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
