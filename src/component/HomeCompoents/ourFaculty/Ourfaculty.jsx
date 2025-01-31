//Css
import "./ourfaculty.css";
import img from "../../../assets/faculty.png";
import instgram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";

const obj = [
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
];

const Ourfaculty = () => {
  return (
    <div className="Ourfaculty">
      <div className="Ourfaculty1">
        <div className="OurFacultyH1">
          <h1>Our Faculty</h1>
        </div>
        <div className="OurFacultyp">
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>

        <div className="allCardFaculty">
          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>







          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>



          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>


          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>



          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>




          <div className="CardFaculty">
            <div className="facultyImg">
              <img src={obj[0].img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{obj[0].name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{obj[0].profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{obj[0].information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{obj[0].subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourfaculty;
